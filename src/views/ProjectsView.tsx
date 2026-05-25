import React, { useState } from 'react';
import { Sparkles, MessageSquare, Laptop, Check, X, ArrowUpRight, Cpu, Layers } from 'lucide-react';
import { Language, Project } from '../types';
import { LOCALIZED_DATA, PROJECTS_LIST } from '../data';

interface ProjectsViewProps {
  lang: Language;
  onOpenQuote: () => void;
}

export default function ProjectsView({ lang, onOpenQuote }: ProjectsViewProps) {
  const p = LOCALIZED_DATA[lang].projectsPage;
  const [filter, setFilter] = useState<'all' | 'saas' | 'ecommerce' | 'mobile' | 'fintech'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtersList = [
    { key: 'all', label: p.filterAll },
    { key: 'saas', label: lang === 'vi' ? 'Quản lý (SaaS)' : 'SaaS Management' },
    { key: 'ecommerce', label: lang === 'vi' ? 'E-commerce' : 'E-commerce' },
    { key: 'mobile', label: lang === 'vi' ? 'Ứng dụng di động' : 'Mobile Apps' },
    { key: 'fintech', label: lang === 'vi' ? 'Fintech' : 'Fintech' },
  ];

  const filteredProjects = PROJECTS_LIST.filter(proj => {
    if (filter === 'all') return true;
    return proj.categoryKey === filter;
  });

  return (
    <div id="projects-page-container" className="space-y-16 pb-20 animate-fade-in">
      
      {/* Page Title & Subtitle */}
      <section id="projects-header" className="pt-8 sm:pt-16 text-center max-w-3xl mx-auto space-y-4 px-4">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-bold">
          {p.badge}
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight">
          {p.title}{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
            {p.titleAccent}
          </span>
        </h1>
        <p className="text-sm sm:text-md text-gray-400 leading-relaxed">
          {p.subtitle}
        </p>
      </section>

      {/* Filter Tabs matching Screen 2 */}
      <section id="portfolio-filters" className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-2">
        {filtersList.map(item => (
          <button
            key={item.key}
            onClick={() => setFilter(item.key as any)}
            className={`px-5 py-2.5 rounded-full text-xs font-mono transition-all uppercase tracking-wider font-semibold border ${
              filter === item.key
                ? 'bg-cyan-400 border-cyan-400 text-black shadow-lg shadow-cyan-950/40'
                : 'bg-gray-900/30 border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
            }`}
          >
            {item.label}
          </button>
        ))}
      </section>

      {/* Filtered Grid List */}
      <section id="projects-grid-gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map(proj => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group cursor-pointer rounded-2xl border border-gray-900 bg-[#161b22]/10 overflow-hidden hover:border-gray-800 transition-all duration-300 shadow-md"
            >
              {/* Card visual showcase slot */}
              <div className="aspect-[16/10] w-full bg-slate-950 overflow-hidden border-b border-gray-900 relative">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Label Category Tag overlay */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#0b0e14]/90 border border-gray-800/80 text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest rounded shadow">
                  {proj.specs}
                </span>

                {/* Micro hover interaction indicator */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="px-4 py-2 bg-[#0d1117] border border-gray-800 rounded-lg text-xs font-mono text-cyan-400 flex items-center gap-1.5 font-bold uppercase tracking-wider">
                    <span>{lang === 'vi' ? 'MỞ BẢN XEM CHI TIẾT' : 'LAUNCH SPECS'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card Title & Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-display font-medium text-white group-hover:text-cyan-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.tags.map(t => (
                    <span key={t} className="text-[10px] font-mono px-2.5 py-1 bg-gray-900 text-gray-400 rounded-md border border-gray-950">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blue / Violet CTA Banner at bottom matching layout */}
      <section id="projects-banner-footer" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-blue-900 bg-gradient-to-r from-emerald-950/10 via-[#0a1122]/90 to-blue-950/20 p-8 sm:p-12 overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />

          <div className="text-center sm:text-left space-y-3 max-w-xl z-10">
            <h3 className="text-2xl font-display font-bold text-white tracking-tight">
              {p.ctaTitle}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {p.ctaDesc}
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="px-8 py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-widest text-black bg-cyan-400 hover:bg-cyan-300 font-semibold shadow-lg shadow-cyan-950/40 shrink-0 z-10 transition-all active:scale-95"
          >
            {p.ctaBtn}
          </button>
        </div>
      </section>

      {/* Interactive Project Details Modal (Side drawer style) */}
      {selectedProject && (
        <div id="project-detail-drawer" className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-fade-in-blur">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedProject(null)} />
          
          <div className="relative w-full max-w-xl h-full bg-[#0d1117] border-l border-gray-800 p-8 overflow-y-auto flex flex-col justify-between shadow-2xl z-10">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full bg-gray-900 border border-gray-800 hover:border-gray-700 transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-6 pt-6">
              <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-800/20 uppercase">
                {selectedProject.specs}
              </span>
              <h2 className="text-2xl font-display font-bold text-white tracking-tight leading-snug">
                {selectedProject.title}
              </h2>
              
              <div className="aspect-[16/10] rounded-xl overflow-hidden border border-gray-800 bg-neutral-950 shadow-md">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-mono tracking-widest text-gray-500 uppercase">PROJECT SCOPE & OBJECTIVE</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono tracking-widest text-gray-500 uppercase">INTEGRATED TECH STACK</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(t => (
                    <div key={t} className="px-3 py-1 rounded-lg bg-gray-900 border border-gray-800 text-xs font-mono text-gray-300">
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl border border-gray-800/50 bg-[#161b22]/30 space-y-2">
                <span className="text-[10px] font-mono text-cyan-400 block font-bold uppercase tracking-wider">PROJECT STATUS</span>
                <p className="text-xs text-gray-400 leading-relaxed">
                  ✅ Fully compiled, tested, and actively operating with zero server configuration overhead.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-900 mt-12">
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenQuote();
                }}
                className="w-full py-4 text-center rounded-xl text-xs font-mono font-bold uppercase tracking-widest text-black bg-cyan-400 hover:bg-cyan-300 transition-colors"
              >
                {lang === 'vi' ? 'Nhận báo giá dự án tương tự' : 'ESTIMATE SIMILAR SYSTEM'}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
