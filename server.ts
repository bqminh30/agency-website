import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
<<<<<<< HEAD
=======
import { GoogleGenAI } from "@google/genai";
>>>>>>> 509944af7e68504def08571927813ddb0b4ed4ad
import dotenv from "dotenv";

dotenv.config();

const app = express();
<<<<<<< HEAD
const PORT = 4000;

app.use(express.json());

const FREEMODEL_API_KEY = process.env.FREEMODEL_API_KEY || "";
const FREEMODEL_BASE_URL = process.env.FREEMODEL_BASE_URL || "https://api.freemodel.dev";
const FREEMODEL_MODEL = process.env.FREEMODEL_MODEL || "deepseek-chat";
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || "";
const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL || "deepseek-chat";
const TELE_BOT_TOKEN = process.env.TELE_BOT_TOKEN || process.env.TELE_API_KEY || "";
const TELE_CHAT_ID = process.env.TELE_CHAT_ID || "";

async function sendToTelegram(text: string) {
  if (!TELE_BOT_TOKEN || !TELE_CHAT_ID) return;

  const url = `https://api.telegram.org/bot${TELE_BOT_TOKEN}/sendMessage`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: TELE_CHAT_ID,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Telegram send failed: ${response.status} ${body}`);
  }
}

function isInsufficientBalance(status: number, bodyText: string) {
  if ([402, 429].includes(status)) return true;
  return /(insufficient|quota|credit|balance|out\s*of\s*funds|payment\s*required)/i.test(bodyText);
}

=======
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
>>>>>>> 509944af7e68504def08571927813ddb0b4ed4ad
app.post("/api/quote-advisor", async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Vui lòng nhập nội dung tin nhắn." });
  }

<<<<<<< HEAD
  if (!FREEMODEL_API_KEY && !DEEPSEEK_API_KEY) {
    return res.status(500).json({ error: "Thiếu FREEMODEL_API_KEY và DEEPSEEK_API_KEY trên server." });
  }

  try {
    const systemInstruction =
      "Bạn là chuyên gia tư vấn giải pháp phần mềm tại Quang Minh Group. " +
      "Trả lời ngắn gọn, rõ ràng bằng tiếng Việt. " +
      "Khi đề xuất stack, ưu tiên theo thứ tự: Node.js, Python, Golang, ReactJS, NextJS, React Native. " +
      "Luôn đưa gợi ý công nghệ, thời gian triển khai và khoảng ngân sách VND khi phù hợp. " +
      "Nếu ước tính ngân sách vượt 50 triệu VND, không đưa mức báo giá cao chi tiết; thay vào đó nói rõ cần nhân sự tư vấn liên hệ để chốt scope trước khi báo giá chính thức.";

    const messages = [
      { role: "system", content: systemInstruction },
      ...(Array.isArray(history)
        ? history.map((chatItem: { role: string; text: string }) => ({
            role: chatItem.role === "assistant" ? "assistant" : "user",
            content: chatItem.text,
          }))
        : []),
      { role: "user", content: message },
    ];

    let reply = "";
    let provider = "deepseek";
    let modelUsed = DEEPSEEK_MODEL;

    if (FREEMODEL_API_KEY) {
      const freeResponse = await fetch(`${FREEMODEL_BASE_URL}/v1/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${FREEMODEL_API_KEY}`,
        },
        body: JSON.stringify({
          model: FREEMODEL_MODEL,
          messages,
          temperature: 0.7,
        }),
      });

      if (freeResponse.ok) {
        const freeData = await freeResponse.json();
        reply = freeData?.choices?.[0]?.message?.content || "";
        provider = "freemodel";
        modelUsed = FREEMODEL_MODEL;
      } else {
        const freeErrorText = await freeResponse.text();
        if (!isInsufficientBalance(freeResponse.status, freeErrorText)) {
          throw new Error(`FreeModel error: ${freeResponse.status} ${freeErrorText}`);
        }
        console.warn("FreeModel hết tiền/quota, fallback sang DeepSeek.");
      }
    }

    if (!reply) {
      if (!DEEPSEEK_API_KEY) {
        throw new Error("FreeModel hết quota và thiếu DEEPSEEK_API_KEY để fallback.");
      }

      const deepseekResponse = await fetch("https://api.deepseek.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
        },
        body: JSON.stringify({
          model: DEEPSEEK_MODEL,
          messages,
          temperature: 0.7,
        }),
      });

      if (!deepseekResponse.ok) {
        const errText = await deepseekResponse.text();
        throw new Error(`DeepSeek error: ${deepseekResponse.status} ${errText}`);
      }

      const deepseekData = await deepseekResponse.json();
      reply = deepseekData?.choices?.[0]?.message?.content || "";
      provider = "deepseek";
      modelUsed = DEEPSEEK_MODEL;
    }

    if (!reply) {
      reply = "Xin lỗi, tôi chưa xử lý được câu hỏi này.";
    }

    try {
      await sendToTelegram(
        `<b>Chatbot Quote</b>\n` +
          `<b>Provider:</b> ${provider}\n` +
          `<b>Model:</b> ${modelUsed}\n` +
          `<b>User:</b> ${message}\n` +
          `<b>AI:</b> ${String(reply).slice(0, 1200)}`
      );
    } catch (teleErr) {
      console.error("Telegram log (quote-advisor) failed:", teleErr);
    }

    res.json({ reply, provider, model: modelUsed });
  } catch (error: any) {
    console.error("AI API Error:", error);
    res.status(500).json({ error: "Có lỗi khi kết nối AI tư vấn. Vui lòng thử lại." });
  }
});

app.post("/api/contact", async (req, res) => {
=======
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
>>>>>>> 509944af7e68504def08571927813ddb0b4ed4ad
  const { name, email, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Họ tên, Email và nội dung tin nhắn là bắt buộc." });
  }

<<<<<<< HEAD
  console.log(`[Contact Submission] Received contact from ${name} (${email}) for service "${service || "General"}": ${message}`);

  try {
    await sendToTelegram(
      `<b>New Contact Lead</b>\n` +
        `<b>Name:</b> ${name}\n` +
        `<b>Email:</b> ${email}\n` +
        `<b>Service:</b> ${service || "General"}\n` +
        `<b>Message:</b> ${message}`
    );
  } catch (teleErr) {
    console.error("Telegram send (contact) failed:", teleErr);
  }

  res.json({ status: "success", message: "Yêu cầu liên hệ đã được gửi." });
});

=======
  console.log(`[Contact Submission] Received contact from ${name} (${email}) for service "${service || 'General'}": ${message}`);
  
  // Real simulate success
  res.json({ status: "success", message: "Yêu cầu liên hệ được gửi thành công!" });
});

// Setup Vite development server or production assets server routing
>>>>>>> 509944af7e68504def08571927813ddb0b4ed4ad
async function initServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
<<<<<<< HEAD
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
=======
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
>>>>>>> 509944af7e68504def08571927813ddb0b4ed4ad
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
<<<<<<< HEAD
    console.log(`[Quang Minh Group Server] Running on port http://0.0.0.0:${PORT}`);
=======
    console.log(`[DevAgency Server] Running on port http://0.0.0.0:${PORT}`);
>>>>>>> 509944af7e68504def08571927813ddb0b4ed4ad
  });
}

initServer().catch((err) => {
  console.error("Failed to initialize server:", err);
});
