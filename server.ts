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

app.post("/api/quote-advisor", async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Vui lòng nhập nội dung tin nhắn." });
  }

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
  const { name, email, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Họ tên, Email và nội dung tin nhắn là bắt buộc." });
  }

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

async function initServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Quang Minh Group Server] Running on port http://0.0.0.0:${PORT}`);
  });
}

initServer().catch((err) => {
  console.error("Failed to initialize server:", err);
});
