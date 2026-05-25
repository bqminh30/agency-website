export async function sendQuoteToTelegram(message: string) {
  const token = process.env.TELE_BOT_TOKEN || process.env.TELE_API_KEY || '';
  const chatId = process.env.TELE_CHAT_ID || '';

  if (!token || !chatId) {
    return { skipped: true };
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: message }),
  });

  if (!res.ok) {
    throw new Error('Telegram API send failed');
  }

  return await res.json();
}

export async function callDeepSeekChatAPI(userMessage: string) {
  const key = process.env.DEEPSEEK_API_KEY || '';
  if (!key) throw new Error('Missing DEEPSEEK_API_KEY');

  const res = await fetch('https://api.deepseek.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [{ role: 'user', content: userMessage }],
    }),
  });

  if (!res.ok) throw new Error('DeepSeek API failed');
  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'Không có phản hồi từ AI.';
}
