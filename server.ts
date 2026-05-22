import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Google GenAI with safety defaults
const ai = process.env.GEMINI_API_KEY 
  ? new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    })
  : null;

// Ensure API Route for AI Advisor Quote calculation
app.post("/api/quote-advisor", async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Vui lòng nhập nội dung tin nhắn." });
  }

  if (!ai) {
    // Elegant fallback simulation if API Key is not set yet in deployment settings
    return res.json({
      reply: `[Chế độ mộc] Cảm ơn bạn đã hỏi về: "${message}". Hiện tại hệ thống Trực tuyến AI đang được kết nối rốt ráo. \n\nSơ bộ cho mô hình này, DevAgency đề xuất:\n- Công nghệ: React + Next.js (Frontend), Node.js (Backend) tối ưu SEO.\n- Thời gian: 4 - 6 tuần.\n- Ước tính ngân sách: Khoảng 25,000,000 VND - 50,000,000 VND tùy thuộc độ phức tạp của cổng thanh toán.\n\nVui lòng cung cấp thêm thông tin liên lạc tại trang "Liên hệ" để kỹ sư trưởng gọi tư vấn trực tiếp cho bạn!`
    });
  }

  try {
    // Configure systematic prompt instructions for DevAgency tech planner chatbot
    const systemInstruction = 
      "Bạn là Trưởng phòng Tư vấn Kỹ thuật cấp cao kiêm Chuyên gia hoạch định phần mềm tại DevAgency (đơn vị thiết kế UI/UX và phát triển website, app SaaS, e-commerce đột phá). " +
      "Nhiệm vụ của bạn là lắng nghe ý tưởng dự án từ khách hàng, phân tích thấu đáo, đưa ra tư vấn giải pháp kỹ thuật, phác thảo kiến trúc công nghệ tiên tiến (đặc biệt ưu tiên React, Next.js, Node.js, Python, Tailwind v4, Flutter/React Native) giúp tối ưu hóa bảo mật và SEO. " +
      "Hãy nhiệt tình ước đoán khoảng thời gian thi công cụ thể (ví dụ: 4-6 tuần, 2 tháng) và khoảng ngân sách đầu tư ước tính hợp lý bằng Việt Nam Đồng (VND) (ví dụ: trên dưới 30-50 triệu VND đối với web tiêu chuẩn, hoặc hàng trăm triệu VND đối với hệ thống ERP/SaaS phức tạp). " +
      "Giọng điệu trả lời cực kỳ lịch lãm, chuyên nghiệp, đáng tin cậy, gần gũi và viết hoàn toàn bằng tiếng Việt rõ ràng, mạch lạc.";

    // Context formatting using previous conversation messages
    const formattedHistory = (history || []).map((chatItem: { role: string; text: string }) => {
      return `${chatItem.role === "user" ? "Khách hàng" : "Trợ lý AI"}: ${chatItem.text}`;
    }).join("\n");

    const fullPrompt = `${formattedHistory}\nKhách hàng: ${message}\nTrợ lý AI:`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: fullPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    const reply = response.text || "Xin lỗi, tôi chưa giải mã được câu hỏi này. Bạn có thể diễn đạt cụ thể hơn không?";
    res.json({ reply });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Có lỗi khi kết nối với AI. Vui lòng thử lại sau ít phút." });
  }
});

// Endpoint for receiving Contact requests
app.post("/api/contact", (req, res) => {
  const { name, email, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Họ tên, Email và nội dung tin nhắn là bắt buộc." });
  }

  console.log(`[Contact Submission] Received contact from ${name} (${email}) for service "${service || 'General'}": ${message}`);
  
  // Real simulate success
  res.json({ status: "success", message: "Yêu cầu liên hệ được gửi thành công!" });
});

// Setup Vite development server or production assets server routing
async function initServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[DevAgency Server] Running on port http://0.0.0.0:${PORT}`);
  });
}

initServer().catch((err) => {
  console.error("Failed to initialize server:", err);
});
