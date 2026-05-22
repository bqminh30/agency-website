import { useState, useEffect, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Bot, Sparkles, Loader2, DollarSign, Clock, Check } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "model",
      text: "Xin chào! Tôi là Trợ lý Tư vấn Kỹ thuật AI tại DevAgency. Hãy chia sẻ cho tôi biết về dự án của bạn (ví dụ: mô hình kinh doanh, tính năng mong muốn, đối tượng người dùng...), tôi sẽ hỗ trợ phân tích giải pháp kỹ thuật, phác thảo tech-stack tối tân và đưa ra ước tính thời gian & ngân sách tham khảo sơ bộ ngay lập tức nhé!"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to latest messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsgText = input.trim();
    setInput("");

    const newMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: userMsgText
    };

    setMessages((prev) => [...prev, newMsg]);
    setLoading(true);

    try {
      const response = await fetch("/api/quote-advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsgText,
          history: messages.map((m) => ({
            role: m.role,
            text: m.text
          }))
        })
      });

      if (response.ok) {
        const data = await response.json();
        const modelMsg: ChatMessage = {
          id: `model-${Date.now()}`,
          role: "model",
          text: data.reply
        };
        setMessages((prev) => [...prev, modelMsg]);
      } else {
        const errData = await response.json();
        setMessages((prev) => [
          ...prev,
          {
            id: `err-${Date.now()}`,
            role: "model",
            text: errData.error || "Có lỗi xảy ra trong quá trình tính toán. Xin vui lòng thử lại."
          }
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: "model",
          text: "Không thể kết nối với trí tuệ nhân tạo. Hãy kiểm tra kết nối mạng của bạn."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-primary/40 backdrop-blur-md"
        />

        {/* Core Modal Box */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          className="relative w-full max-w-4xl h-[85vh] sm:h-[80vh] flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden border border-primary/5 select-text"
        >
          {/* Top Close Button for Mobile */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 text-primary/60 hover:text-primary hover:bg-bg-light rounded-full transition-all cursor-pointer"
            id="btn-close-quote"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Left Panel: Slogan and Fast Contact Form */}
          <div className="w-full md:w-[35%] bg-primary text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden bg-grid-pattern-dark">
            <div className="space-y-6 relative z-10 select-none">
              <span className="inline-flex items-center gap-1.5 rounded bg-accent-cyan/10 px-2.5 py-1 text-xs font-bold uppercase text-accent-cyan border border-accent-cyan/20">
                <Sparkles className="h-3 w-3 animate-pulse" /> tư vấn tức thì
              </span>
              <h2 className="text-2xl font-black leading-tight tracking-tight">
                Ước tính giá ứng dụng dự án của bạn
              </h2>
              <p className="text-xs text-white/70 leading-relaxed">
                Chúng tôi cung cấp quy trình tư vấn thông minh dựa trên AI giúp làm rõ ý tưởng kinh doanh và hoạch định ngân sách triển khai hiệu quả cao nhất.
              </p>
            </div>

            {/* Quick trust metrics */}
            <div className="space-y-4 relative z-10 pt-8 md:pt-0 select-none">
              <div className="flex items-center space-x-3 text-xs font-medium text-white/85">
                <div className="p-1 rounded bg-accent-cyan/10 border border-accent-cyan/20">
                  <Check className="h-4 w-4 text-accent-cyan" />
                </div>
                <span>Tư vấn hoàn toàn miễn phí</span>
              </div>
              <div className="flex items-center space-x-3 text-xs font-medium text-white/85">
                <div className="p-1 rounded bg-accent-cyan/10 border border-accent-cyan/20">
                  <DollarSign className="h-4 w-4 text-accent-cyan" />
                </div>
                <span>Ước lượng chi phí chính xác</span>
              </div>
              <div className="flex items-center space-x-3 text-xs font-medium text-white/85">
                <div className="p-1 rounded bg-accent-cyan/10 border border-accent-cyan/20">
                  <Clock className="h-4 w-4 text-accent-cyan" />
                </div>
                <span>Phản hồi tin nhắn nhanh 20-30s</span>
              </div>
            </div>

            {/* Glowing bubble backgrounds */}
            <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-accent-cyan/10 rounded-full blur-[60px] pointer-events-none" />
          </div>

          {/* Right Panel: Interactive AI Chat Advisor */}
          <div className="flex-1 flex flex-col h-full bg-bg-light/40 overflow-hidden relative" id="quote-chat-column">
            {/* Advisor header title */}
            <div className="border-b border-primary/5 px-6 py-4 flex items-center space-x-3 bg-white">
              <div className="p-2 rounded-lg bg-primary/5 border border-primary/10">
                <Bot className="h-5 w-5 text-accent-blue" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-primary">Tư vấn Kỹ sư AI DevAgency</h4>
                <p className="text-[10px] text-green-500 font-semibold flex items-center gap-1 select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                  Hỗ trợ tư vấn giải pháp tức thời
                </p>
              </div>
            </div>

            {/* Messages box container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4" id="chat-messages-scroll-area">
              {messages.map((m) => {
                const isModel = m.role === "model";
                return (
                  <div
                    key={m.id}
                    className={`flex ${isModel ? "justify-start" : "justify-end"} items-start gap-2.5`}
                  >
                    {isModel && (
                      <div className="p-1.5 bg-accent-blue/10 rounded border border-accent-blue/25 text-accent-blue mt-0.5 flex-shrink-0 select-none">
                        <Bot className="h-4 w-4" />
                      </div>
                    )}
                    
                    <div
                      className={`max-w-[85%] rounded-xl px-4 py-3.5 text-xs font-medium leading-relaxed whitespace-pre-wrap ${
                        isModel
                          ? "bg-white border border-primary/5 text-primary shadow-sm"
                          : "bg-primary text-white shadow"
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                );
              })}

              {loading && (
                <div className="flex justify-start items-center gap-2.5">
                  <div className="p-1.5 bg-accent-blue/10 rounded border border-accent-blue/25 text-accent-blue flex-shrink-0">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-white border border-primary/5 text-primary font-medium text-xs px-4 py-3 rounded-xl flex items-center space-x-2 shadow-sm">
                    <Loader2 className="h-3.5 w-3.5 animate-spin text-accent-blue" />
                    <span className="text-primary/60">AI đang phân tích dự án của bạn...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input interface */}
            <form onSubmit={handleSend} className="p-4 border-t border-primary/5 bg-white flex items-center gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Nhập yêu cầu dự án của bạn (ví dụ: web bán hàng thời trang b2b)..."
                className="flex-1 rounded-lg border border-primary/10 bg-bg-light/50 px-4 py-3 text-xs font-medium focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/10 transition-all text-primary"
                id="quote-chat-input-text"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="p-3 rounded-lg bg-primary hover:bg-primary-dark text-white disabled:opacity-40 transition-colors cursor-pointer"
                id="btn-quote-chat-send"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
