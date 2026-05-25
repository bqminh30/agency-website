import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { LOCALIZED_DATA } from '../data';

interface ContactFormProps {
  lang: Language;
}

export default function ContactForm({ lang }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorText, setErrorText] = useState('');

  const t = LOCALIZED_DATA[lang].contactPage.form;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !service) return;

    setStatus('submitting');
    setErrorText('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, service, message }),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || 'Gửi form thất bại.');
      }
      setStatus('success');
      setTimeout(() => {
        setName('');
        setEmail('');
        setService('');
        setMessage('');
        setStatus('idle');
      }, 4000);
    } catch (err: any) {
      setErrorText(err?.message || 'Có lỗi khi gửi thông tin.');
      setStatus('error');
    }
  };

  return (
    <div id="contact-form-card" className="w-full bg-[#161b22]/70 border border-gray-800/80 rounded-2xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-sm shadow-xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {status === 'success' ? (
        <div id="contact-success-screen" className="flex flex-col items-center justify-center text-center py-12 animate-fade-in">
          <div className="w-14 h-14 rounded-full bg-cyan-950 text-cyan-400 flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8 stroke-[2]" />
          </div>
          <h4 className="text-xl font-display font-semibold text-white mb-2">
            {lang === 'vi' ? 'Đã Nhận Yêu Cầu!' : 'Request Dispatched!'}
          </h4>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
            {t.success}
          </p>
          <div className="mt-8 flex items-center gap-2 px-3 py-1 bg-cyan-950/20 rounded-full border border-cyan-800/10 text-xs text-cyan-400 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SLA RESPONSE IN &lt; 24H</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Form field: HỌ TÊN */}
          <div>
            <label className="block text-xs font-mono font-medium tracking-wider text-gray-400 uppercase mb-2">
              {t.name}
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder={t.namePlaceholder}
              className="w-full px-4 py-3 text-sm bg-gray-950/40 border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 hover:border-gray-700 focus:ring-1 focus:ring-cyan-500/20 transition-all font-sans"
            />
          </div>

          {/* Form field: EMAIL */}
          <div>
            <label className="block text-xs font-mono font-medium tracking-wider text-gray-400 uppercase mb-2">
              {t.email}
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={t.emailPlaceholder}
              className="w-full px-4 py-3 text-sm bg-gray-950/40 border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 hover:border-gray-700 focus:ring-1 focus:ring-cyan-500/20 transition-all font-mono"
            />
          </div>

          {/* Form field: DỊCH VỤ QUAN TÂM */}
          <div>
            <label className="block text-xs font-mono font-medium tracking-wider text-gray-400 uppercase mb-2">
              {t.service}
            </label>
            <div className="relative">
              <select
                required
                value={service}
                onChange={e => setService(e.target.value)}
                className="w-full px-4 py-3 text-sm bg-gray-950/40 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 hover:border-gray-700 focus:ring-1 focus:ring-cyan-500/20 transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled className="bg-[#0d1117] text-gray-600">{t.serviceChoose}</option>
                {t.serviceOptions.map((opt, i) => (
                  <option key={i} value={opt} className="bg-[#0d1117] text-gray-300">{opt}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

          {/* Form field: LỜI NHẮN */}
          <div>
            <label className="block text-xs font-mono font-medium tracking-wider text-gray-400 uppercase mb-2">
              {t.message}
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder={t.messagePlaceholder}
              className="w-full px-4 py-3 text-sm bg-gray-950/40 border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 hover:border-gray-700 focus:ring-1 focus:ring-cyan-500/20 transition-all"
            />
          </div>

          {/* Bottom disclaimer font detail */}
          <p className="text-[11px] text-gray-500 leading-normal">
            {t.disclaimer}
          </p>
          {status === 'error' && (
            <p className="text-xs text-rose-400">{errorText}</p>
          )}

          {/* Action button */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-black bg-cyan-400 hover:bg-cyan-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>CONNECTING...</span>
              </>
            ) : (
              <>
                <span>{t.btnSubmit}</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
