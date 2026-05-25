import React from 'react';
import { ArrowUpRight, Cpu, Layers, Award, Terminal, Zap, Shield, HelpCircle, Code } from 'lucide-react';
import { Language } from '../types';
import { LOCALIZED_DATA, PROJECTS_LIST } from '../data';
import ContactForm from '../components/ContactForm';

interface HomeViewProps {
  lang: Language;
  onNavigate: (view: string) => void;
  onOpenQuote: () => void;
}

export default function HomeView({ lang, onNavigate, onOpenQuote }: HomeViewProps) {
  const h = LOCALIZED_DATA[lang].hero;
  const a = LOCALIZED_DATA[lang].aboutCompact;
  const s = LOCALIZED_DATA[lang].servicesCompact;
  const w = LOCALIZED_DATA[lang].whyUsSection;
  const c = LOCALIZED_DATA[lang].contactPage;

  // Let's use the actual generated workspace hero path
  const heroImgSrc = '/src/assets/images/workspace_hero_1779681117807.png';

  const featuredProjects = PROJECTS_LIST.slice(0, 2);

  return (
    <div id="home-view" className="space-y-24 pb-20 animate-fade-in">
      
      {/* 1. Hero Section */}
      <section id="hero-section" className="relative pt-8 sm:pt-16 pb-8 overflow-hidden">
        {/* Abstract Glowing Accent */}
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-cyan-400">
                <Terminal className="w-3.5 h-3.5" />
                <span className="text-[11px] font-mono tracking-widest uppercase font-semibold">
                  {h.badge}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.1]">
                {h.title}{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
                  {h.titleAccent}
                </span>
              </h1>

              <p className="text-md sm:text-lg text-gray-400 leading-relaxed max-w-xl">
                {h.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  onClick={onOpenQuote}
                  className="px-8 py-3.5 rounded-xl font-semibold text-black bg-cyan-400 hover:bg-cyan-300 active:scale-98 transition text-center text-sm shadow-lg shadow-cyan-950/50"
                >
                  {h.btnStart}
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="px-8 py-3.5 rounded-xl font-medium text-gray-300 border border-gray-800 hover:text-white hover:bg-gray-900/40 hover:border-gray-700 transition text-center text-sm"
                >
                  {h.btnServices}
                </button>
              </div>
            </div>

            {/* Right Asset / Image Column */}
            <div id="hero-graphic" className="lg:col-span-6 relative">
              <div className="relative rounded-2xl border border-gray-800/80 overflow-hidden shadow-2xl bg-gray-950">
                <img
                  src={heroImgSrc}
                  alt="Development Desk Setup"
                  className="w-full object-cover aspect-[4/3] opacity-90 transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Tech Specifications Overlay Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-3 bg-[#0d1117]/90 border border-gray-800/80 rounded-xl shadow-lg backdrop-blur-sm">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[10px] text-gray-200 uppercase tracking-wider font-semibold">
                    {h.qualityCommitment}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Brand Spotlight / About Compact */}
      <section id="about-compact" className="border-t border-b border-gray-900/60 bg-[#0c1015]/40 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-semibold">
            LEAN POWERHOUSE
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">
            {a.title}
          </h2>
          <p className="text-sm sm:text-md text-gray-400 leading-relaxed">
            {a.desc}
          </p>
        </div>
      </section>

      {/* 3. Specialized Services Showcase */}
      <section id="homepage-services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
            VERTICAL EXPERTISE
          </span>
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">
            {s.title}
          </h2>
          <p className="text-sm text-gray-400 max-w-md mx-auto">
            {s.subtitle}
          </p>
        </div>

        {/* Dynamic Services Bento-ish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {s.cards.map((card, i) => {
            const isDark = card.isDark;
            return (
              <div
                key={card.id}
                className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 relative group overflow-hidden ${
                  isDark 
                    ? 'border-blue-900 bg-gradient-to-b from-[#111827] to-[#0f172a] shadow-lg shadow-blue-950/20' 
                    : 'border-gray-800/70 bg-[#161b22]/30 hover:border-gray-700'
                }`}
              >
                {/* Accent glow bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all group-hover:bg-cyan-400 ${
                  isDark ? 'bg-blue-500' : 'bg-transparent'
                }`} />

                {card.tag && (
                  <span className="absolute top-6 right-6 font-mono text-[9px] px-2 py-0.5 rounded border border-blue-500/30 text-blue-400 uppercase tracking-widest bg-blue-950/50">
                    {card.tag}
                  </span>
                )}

                <span className="text-xs font-mono text-cyan-400/80 mb-4 block">0{i + 1}</span>
                <h3 className="text-lg font-display font-bold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">{card.desc}</p>
                
                <button 
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>{card.linkText || (lang === 'vi' ? 'Tìm hiểu thêm' : 'Learn more')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Why Us Grid & Core Stats */}
      <section id="why-us-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
          
          {/* Why choose narrative text */}
          <div className="lg:col-span-12 space-y-4 mb-4 text-center lg:text-left">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
              OPERATIONAL METRICS
            </span>
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">
              {w.title} <span className="text-cyan-400">{w.titleAccent}</span>
            </h2>
            <p className="text-sm text-gray-400 max-w-xl mx-auto lg:mx-0">
              {w.description}
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {w.reasons.map((reason, idx) => (
              <div key={reason.id} className="p-5 border border-gray-800 bg-[#161b22]/15 rounded-xl space-y-3">
                <div className="p-3 w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-cyan-400">
                  {idx === 0 && <Cpu className="w-5 h-5" />}
                  {idx === 1 && <Shield className="w-5 h-5" />}
                  {idx === 2 && <Zap className="w-5 h-5" />}
                </div>
                <h4 className="text-sm font-display font-bold text-white leading-snug">{reason.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {w.stats.map((stat, i) => (
              <div key={i} className="p-6 bg-gradient-to-b from-[#161b22]/40 to-transparent border border-gray-900/80 rounded-xl text-center">
                <p className="text-4xl font-display font-bold bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Representative Projects Highlights */}
      <section id="home-projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 border-b border-gray-900 pb-6">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
              SELECTED CASES
            </span>
            <h2 className="text-2xl font-display font-bold text-white tracking-tight">
              {lang === 'vi' ? 'Dự Án Tiêu Biểu' : 'Featured Client Solutions'}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="text-xs font-mono font-bold tracking-wider text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
          >
            <span>{lang === 'vi' ? 'XEM CẢ DANH MỤC' : 'VIEW FULL PORTFOLIO'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => onNavigate('projects')}
              className="group cursor-pointer rounded-2xl border border-gray-900 bg-[#0d1117]/40 overflow-hidden hover:border-gray-800/80 transition-all duration-300"
            >
              <div className="aspect-[16/9] w-full bg-slate-950 overflow-hidden border-b border-gray-900 relative">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0b0e14]/90 border border-gray-800 text-[9px] font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                  {proj.specs}
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.tags.map(t => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-gray-900 text-gray-500 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Contact In-Home Form Section */}
      <section id="home-contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6 lg:pt-8">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
              ENGAGEMENT SLA
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              {c.title} <span className="text-cyan-400">{c.titleSuffix}</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {c.subtitle}
            </p>

            <div className="space-y-4 pt-4 border-t border-gray-900">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-950/20 text-cyan-400 flex items-center justify-center font-semibold text-xs font-mono">
                  @
                </div>
                <div>
                  <span className="block text-[10px] text-gray-500 uppercase font-mono tracking-wider">{c.emailLabel}</span>
                  <span className="text-sm font-medium font-mono text-white">bqminh30@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-950/20 text-cyan-400 flex items-center justify-center font-semibold text-xs font-mono">
                  HQ
                </div>
                <div>
                  <span className="block text-[10px] text-gray-500 uppercase font-mono tracking-wider">{lang === 'vi' ? 'ĐỊA CHỈ' : 'HEADQUARTERS'}</span>
                  <span className="text-sm text-gray-300 leading-tight">Tòa B - Imperia Garden, 143 Đ. Nguyễn Tuân, Thanh Xuân, Hà Nội, Việt Nam</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm lang={lang} />
          </div>

        </div>
      </section>

    </div>
  );
}
