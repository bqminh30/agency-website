import React, { useState } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

type ChatItem = { role: 'user' | 'assistant'; text: string };

export default function QuoteChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatItem[]>([
    { role: 'assistant', text: 'Chào bạn, mình có thể tư vấn nhanh timeline và chi phí dự án. Bạn đang muốn làm gì?' },
  ]);

  const sendMessage = async () => {
    const content = input.trim();
    if (!content || loading) return;

    const nextMessages = [...messages, { role: 'user' as const, text: content }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/quote-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: content,
          history: messages,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || 'AI đang bận, vui lòng thử lại.');
      }

      const data = await response.json();
      const reply = String(data?.reply || 'Mình chưa có phản hồi phù hợp.');
      setMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
    } catch (error: any) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: error?.message || 'Có lỗi khi kết nối chatbot.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {open && (
        <div className="mb-3 w-[340px] max-w-[calc(100vw-2rem)] rounded-xl border border-gray-800 bg-[#0d1117] shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
            <p className="text-sm font-semibold text-white">Chat Báo Giá</p>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="h-80 overflow-y-auto p-3 space-y-2">
            {messages.map((item, idx) => (
              <div
                key={idx}
                className={`max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
                  item.role === 'user'
                    ? 'ml-auto bg-cyan-500 text-black'
                    : 'bg-gray-900 text-gray-100 border border-gray-800'
                }`}
              >
                {item.text}
              </div>
            ))}
            {loading && (
              <div className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm bg-gray-900 border border-gray-800 text-gray-300">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Đang phân tích...</span>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-gray-800 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') sendMessage();
              }}
              placeholder="Mô tả dự án của bạn..."
              className="flex-1 px-3 py-2 rounded-lg bg-gray-950 border border-gray-800 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="p-2.5 rounded-lg bg-cyan-400 text-black hover:bg-cyan-300 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="ml-auto flex items-center justify-center w-14 h-14 rounded-full bg-cyan-400 text-black shadow-lg hover:bg-cyan-300"
        aria-label="Mở chat báo giá"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
