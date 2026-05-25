import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Check, Calculator, Mail } from 'lucide-react';
import { Language } from '../types';
import { LOCALIZED_DATA, QUOTE_PRICE_CONFIG } from '../data';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
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
  );
}
