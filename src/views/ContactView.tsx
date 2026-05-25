import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Share2, Globe, Command, Award, Trash } from 'lucide-react';
import { Language } from '../types';
import { LOCALIZED_DATA } from '../data';
import ContactForm from '../components/ContactForm';

interface ContactViewProps {
  lang: Language;
}

export default function ContactView({ lang }: ContactViewProps) {
  const c = LOCALIZED_DATA[lang].contactPage;
  const [draftRequests, setDraftRequests] = useState<any[]>([]);

  const loadDrafts = () => {
    try {
      const saved = localStorage.getItem('qmg_quotes_drafts');
      if (saved) {
        setDraftRequests(JSON.parse(saved));
      } else {
        setDraftRequests([]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadDrafts();
    // Setup a small interval to continuously sync if they submit home or contact forms
    const interval = setInterval(loadDrafts, 1500);
    return () => clearInterval(interval);
  }, []);

  const clearRequest = (id: string) => {
    const updated = draftRequests.filter(item => item.id !== id);
    localStorage.setItem('qmg_quotes_drafts', JSON.stringify(updated));
    setDraftRequests(updated);
  };

  return (
    <div id="contact-page-container" className="space-y-16 pb-20 animate-fade-in">
      
      {/* Primary Split Contact Grid */}
      <section id="contact-grid-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-bold">
                GET IN TOUCH
              </span>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight leading-none">
                {c.title}{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                  {c.titleSuffix}
                </span>
              </h1>
              <p className="text-sm sm:text-md text-gray-400 leading-relaxed">
                {c.subtitle}
              </p>
            </div>

            {/* Structured Contact Details matching Screen 4 layout */}
            <div className="space-y-6 pt-4 border-t border-gray-900/60 font-sans">
              
              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-[#161b22] border border-gray-800 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-mono text-gray-500 uppercase tracking-wider font-semibold">
                    {c.emailLabel}
                  </h4>
                  <a href="mailto:bqminh30@gmail.com" className="text-sm font-medium font-mono text-white hover:text-cyan-400 transition-colors">
                    bqminh30@gmail.com
                  </a>
                  <p className="text-[11px] text-gray-500">{lang === 'vi' ? 'SLA Phản hồi dưới 24h' : 'SLA response under 24h'}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-[#161b22] border border-gray-800 text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-mono text-gray-500 uppercase tracking-wider font-semibold">
                    {c.phoneLabel}
                  </h4>
                  <p className="text-sm font-medium font-mono text-white">
                    +84 (362) 592 858
                  </p>
                  <p className="text-[11px] text-gray-500">Mon - Fri, 9:00 - 18:00 (GMT+7)</p>
                </div>
              </div>

              {/* Physical Office Address */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-[#161b22] border border-gray-800 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-mono text-gray-500 uppercase tracking-wider font-semibold">
                    {c.addressLabel}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed font-sans">
                    {lang === 'vi' 
                      ? 'Tòa B - Imperia Garden, 143 Đ. Nguyễn Tuân, Thanh Xuân, Hà Nội, Việt Nam' 
                      : 'Building B - Imperia Garden, 143 D. Nguyen Tuan, Thanh Xuan, Hanoi, Vietnam'}
                  </p>
                </div>
              </div>

            </div>

            {/* Social Follow Bar */}
            <div className="space-y-3 pt-6 border-t border-gray-900/60 font-mono text-xs">
              <h4 className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                {c.followUs}
              </h4>
              <div className="flex gap-3">
                {[
                  { icon: Globe, label: 'Website' },
                  { icon: Share2, label: 'LinkedIn' },
                  { icon: Command, label: 'GitHub' },
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <button
                      key={i}
                      className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-800 hover:border-cyan-500 bg-gray-900/10 hover:bg-cyan-950/10 text-gray-400 hover:text-cyan-400 rounded-lg text-xs font-mono transition-all"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{social.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Input Form Column */}
          <div className="lg:col-span-7">
            <ContactForm lang={lang} />
          </div>

        </div>
      </section>

      {/* Interactive Sub-Section: Submitted requests list (Local State Verification) */}
      {draftRequests.length > 0 && (
        <section id="submissions-drafts-history" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-900/80 pt-12">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <h3 className="text-md font-mono text-white uppercase tracking-wider">
                  {lang === 'vi' ? 'Lịch sử yêu cầu tư vấn (Trình duyệt)' : 'Incoming Requests Queue (Local)'}
                </h3>
              </div>
              <span className="text-[10px] bg-cyan-950 text-cyan-400 font-mono px-2 py-0.5 rounded border border-cyan-800/10">
                {draftRequests.length} {lang === 'vi' ? 'Bản ghi' : 'Leads'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {draftRequests.map((req) => (
                <div key={req.id} className="p-4 rounded-xl border border-gray-900 bg-gray-950/40 space-y-3 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">{req.name}</span>
                      <button
                        onClick={() => clearRequest(req.id)}
                        className="text-gray-500 hover:text-rose-400 transition"
                        title="Delete entry"
                      >
                        <Trash className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-xs font-mono text-cyan-400/80">{req.email}</p>
                    <p className="text-xs text-gray-400 bg-gray-900/60 p-2 rounded border border-gray-900/30 font-sans italic line-clamp-2">
                      &ldquo;{req.message || 'No remarks provided.'}&rdquo;
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-gray-900/50 text-[10px] font-mono">
                    <span className="text-gray-500">{req.date}</span>
                    <span className="text-cyan-400 font-semibold">{req.service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
