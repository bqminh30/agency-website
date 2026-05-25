<<<<<<< HEAD
import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Check, Calculator, Mail } from 'lucide-react';
import { Language } from '../types';
import { LOCALIZED_DATA, QUOTE_PRICE_CONFIG } from '../data';
=======
import { useState, useEffect, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Bot, Sparkles, Loader2, DollarSign, Clock, Check } from "lucide-react";
>>>>>>> 509944af7e68504def08571927813ddb0b4ed4ad

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
<<<<<<< HEAD
  lang: Language;
}

export default function QuoteModal({ isOpen, onClose, lang }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState<'app' | 'web' | 'ecommerce' | 'ai' | 'automation'>('web');
  const [complexity, setComplexity] = useState<'basic' | 'medium' | 'advanced'>('medium');
  const [timeline, setTimeline] = useState<'fast' | 'normal' | 'flex'>('normal');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const t = LOCALIZED_DATA[lang].quoteEstimator;

  // Simple pricing calculation logic
  const calculateEstimate = () => {
    const basePrice = QUOTE_PRICE_CONFIG.basePriceUsd[projectType];
    const multiplier = QUOTE_PRICE_CONFIG.complexityMultiplier[complexity];
    const timelineMod = QUOTE_PRICE_CONFIG.timelineMultiplier[timeline];

    const calcValue = Math.round(basePrice * multiplier * timelineMod);
    const minRange = Math.round(calcValue * QUOTE_PRICE_CONFIG.range.min);
    const maxRange = Math.round(calcValue * QUOTE_PRICE_CONFIG.range.max);

    return {
      min: minRange.toLocaleString('en-US'),
      max: maxRange.toLocaleString('en-US'),
      vndMin: (minRange * QUOTE_PRICE_CONFIG.usdToVnd).toLocaleString('vi-VN'),
      vndMax: (maxRange * QUOTE_PRICE_CONFIG.usdToVnd).toLocaleString('vi-VN'),
    };
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(prev => prev + 1);
    } else {
      setIsCalculated(true);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactEmail) {
      setSubmitted(true);
      setTimeout(() => {
        // Reset states
        setSubmitted(false);
        setIsCalculated(false);
        setStep(1);
        onClose();
      }, 3500);
    }
  };

  const currentEstimate = calculateEstimate();

  return (
    <div id="quote-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div id="quote-modal-container" className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-800 bg-[#0d1117]/95 shadow-2xl">
        
        {/* Progress Bar */}
        <div id="quote-progress" className="absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300" style={{ width: `${(step / 4) * 100}%` }} />

        {/* Close button */}
        <button id="quote-modal-close" onClick={onClose} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full hover:bg-gray-800/50 transition-colors">
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <div className="flex items-center gap-2 mb-2">
            <Calculator className="w-5 h-5 text-cyan-400" />
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">QMG ESTIMATOR</span>
          </div>
          <h2 className="text-2xl font-display font-bold text-white mb-1">{t.title}</h2>
          <p className="text-sm text-gray-400 mb-6">{t.subtitle}</p>

          {!isCalculated ? (
            <div>
              {/* Step content */}
              <div id="quote-step-content" className="min-h-[220px] mb-8">
                {step === 1 && (
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">{t.step1}</label>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {[
                        { id: 'web', name: lang === 'vi' ? 'Website / Landing' : 'Web / Landing' },
                        { id: 'app', name: lang === 'vi' ? 'Ứng dụng di động' : 'Mobile Application' },
                        { id: 'ecommerce', name: lang === 'vi' ? 'E-Commerce' : 'E-Commerce System' },
                        { id: 'ai', name: lang === 'vi' ? 'Hệ thống AI / Chatbot' : 'AI / Chat' },
                        { id: 'automation', name: lang === 'vi' ? 'Tự động hóa' : 'Automation' },
                      ].map(item => (
                        <button
                          key={item.id}
                          onClick={() => setProjectType(item.id as any)}
                          className={`p-4 rounded-xl border text-left transition-all ${
                            projectType === item.id 
                              ? 'border-cyan-500 bg-cyan-950/20 text-white shadow-md shadow-cyan-950/50' 
                              : 'border-gray-800 bg-gray-900/30 text-gray-400 hover:border-gray-700 hover:text-gray-200'
                          }`}
                        >
                          <span className="block text-xs font-mono text-cyan-400/80 mb-1">01</span>
                          <span className="text-sm font-medium block leading-tight">{item.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-300 mb-3">{t.step2}</label>
                    {[
                      { id: 'basic', label: t.complexity.basic },
                      { id: 'medium', label: t.complexity.medium },
                      { id: 'advanced', label: t.complexity.advanced },
                    ].map(item => (
                      <button
                        key={item.id}
                        onClick={() => setComplexity(item.id as any)}
                        className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
                          complexity === item.id 
                            ? 'border-cyan-500 bg-cyan-950/20 text-white' 
                            : 'border-gray-800 bg-gray-900/40 text-gray-400 hover:border-gray-700'
                        }`}
                      >
                        <span className="text-sm font-medium">{item.label}</span>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                          complexity === item.id ? 'border-cyan-400 bg-cyan-500 text-black' : 'border-gray-700'
                        }`}>
                          {complexity === item.id && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-300 mb-3">{t.step3}</label>
                    {[
                      { id: 'fast', label: t.timeline.fast },
                      { id: 'normal', label: t.timeline.normal },
                      { id: 'flex', label: t.timeline.flex },
                    ].map(item => (
                      <button
                        key={item.id}
                        onClick={() => setTimeline(item.id as any)}
                        className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
                          timeline === item.id 
                            ? 'border-cyan-500 bg-cyan-950/20 text-white' 
                            : 'border-gray-800 bg-gray-900/40 text-gray-400 hover:border-gray-700'
                        }`}
                      >
                        <span className="text-sm font-medium">{item.label}</span>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                          timeline === item.id ? 'border-cyan-400 bg-cyan-500 text-black' : 'border-gray-700'
                        }`}>
                          {timeline === item.id && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">{t.step4}</label>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">HỌ VÀ TÊN</label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={e => setContactName(e.target.value)}
                          placeholder="e.g. Nguyễn Văn A / John Doe"
                          className="w-full px-4 py-3 text-sm rounded-lg bg-gray-900/60 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">EMAIL LIÊN HỆ *</label>
                        <input
                          type="email"
                          required
                          value={contactEmail}
                          onChange={e => setContactEmail(e.target.value)}
                          placeholder="your-email@example.com"
                          className="w-full px-4 py-3 text-sm rounded-lg bg-gray-900/60 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-900/40">
                <button
                  onClick={handlePrev}
                  disabled={step === 1}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                    step === 1 ? 'text-gray-700 cursor-not-allowed' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  {t.prev}
                </button>

                <button
                  onClick={handleNext}
                  disabled={step === 4 && !contactEmail}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-black bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all`}
                >
                  {step === 4 ? t.submit : t.next}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Calculation Output Visual */
            <div id="quote-result-screen" className="text-center py-6">
              {!submitted ? (
                <div className="space-y-6">
                  <div className="inline-flex p-4 rounded-full bg-cyan-500/10 text-cyan-400 mb-2">
                    <Calculator className="w-10 h-10 animate-pulse" />
                  </div>
                  <h3 className="text-xl font-display font-medium text-white">{t.resultTitle}</h3>
                  <p className="text-sm text-gray-400 max-w-md mx-auto">{t.resultDesc}</p>

                  <div className="py-6 px-4 bg-gray-950/60 rounded-xl border border-gray-950 max-w-md mx-auto">
                    <p className="text-xs text-cyan-400/80 font-mono mb-2 uppercase tracking-wider">Estimated Investment</p>
                    <p className="text-3xl font-display font-bold text-white mb-1">
                      {lang === 'vi' ? `${currentEstimate.vndMin} - ${currentEstimate.vndMax} VND` : `$${currentEstimate.min} - $${currentEstimate.max}`}
                    </p>
                    <p className="text-xs text-gray-500">
                      {lang === 'vi' ? `(~ $${currentEstimate.min} - $${currentEstimate.max} USD)` : `(~ ${currentEstimate.vndMin} - ${currentEstimate.vndMax} VND)`}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="pt-4 max-w-sm mx-auto">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      {t.resultCall}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="space-y-4 py-8 text-center animate-fade-in">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 mb-2">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-white">
                    {lang === 'vi' ? 'Đã Gửi Thành Công!' : 'Dispatched Successfully!'}
                  </h3>
                  <p className="text-sm text-gray-400 max-w-sm mx-auto">
                    {lang === 'vi' 
                      ? 'Chúng tôi đã nhận được cấu hình của bạn và sẽ gửi tệp báo giá PDF chính chủ qua hòm thư sớm nhất!' 
                      : 'We have registered your project layout and will deliver a formalized PDF estimation to your email shortly.'}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
=======
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
>>>>>>> 509944af7e68504def08571927813ddb0b4ed4ad
  );
}
