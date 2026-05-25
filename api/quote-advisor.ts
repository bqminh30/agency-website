function isInsufficientBalance(status: number, bodyText: string) {
  if ([402, 429].includes(status)) return true;
  return /(insufficient|quota|credit|balance|out\s*of\s*funds|payment\s*required)/i.test(bodyText);
}

async function sendToTelegram(text: string) {
  const token = process.env.TELE_BOT_TOKEN || process.env.TELE_API_KEY || "";
  const chatId = process.env.TELE_CHAT_ID || "";
  if (!token || !chatId) return;

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
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

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const { message, history } = body;

  if (!message) {
    return res.status(400).json({ error: "Vui lòng nhập nội dung tin nhắn." });
  }

  const freeModelApiKey = process.env.FREEMODEL_API_KEY || "";
  const freeModelBaseUrl = process.env.FREEMODEL_BASE_URL || "https://api.freemodel.dev";
  const freeModelModel = process.env.FREEMODEL_MODEL || "deepseek-chat";
  const deepseekApiKey = process.env.DEEPSEEK_API_KEY || "";
  const deepseekModel = process.env.DEEPSEEK_MODEL || "deepseek-chat";

  if (!freeModelApiKey && !deepseekApiKey) {
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
    let modelUsed = deepseekModel;

    if (freeModelApiKey) {
      const freeResponse = await fetch(`${freeModelBaseUrl}/v1/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${freeModelApiKey}`,
        },
        body: JSON.stringify({
          model: freeModelModel,
          messages,
          temperature: 0.7,
        }),
      });

      if (freeResponse.ok) {
        const freeData = await freeResponse.json();
        reply = freeData?.choices?.[0]?.message?.content || "";
        provider = "freemodel";
        modelUsed = freeModelModel;
      } else {
        const freeErrorText = await freeResponse.text();
        if (!isInsufficientBalance(freeResponse.status, freeErrorText)) {
          throw new Error(`FreeModel error: ${freeResponse.status} ${freeErrorText}`);
        }
      }
    }

    if (!reply) {
      if (!deepseekApiKey) {
        throw new Error("FreeModel hết quota và thiếu DEEPSEEK_API_KEY để fallback.");
      }

      const deepseekResponse = await fetch("https://api.deepseek.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${deepseekApiKey}`,
        },
        body: JSON.stringify({
          model: deepseekModel,
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
      modelUsed = deepseekModel;
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

    return res.status(200).json({ reply, provider, model: modelUsed });
  } catch (error: any) {
    console.error("AI API Error:", error);
    return res.status(500).json({ error: "Có lỗi khi kết nối AI tư vấn. Vui lòng thử lại." });
  }
}
