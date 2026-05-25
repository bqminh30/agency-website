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
  const { name, email, service, message } = body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Họ tên, Email và nội dung tin nhắn là bắt buộc." });
  }

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

  return res.status(200).json({ status: "success", message: "Yêu cầu liên hệ đã được gửi." });
}
