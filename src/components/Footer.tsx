import React from 'react';
import { Network, Globe, MessageSquare, Terminal, Heart } from 'lucide-react';
import { Language } from '../types';
import { LOCALIZED_DATA } from '../data';

interface FooterProps {
  onNavigate: (view: string) => void;
  lang: Language;
  onLangToggle: (lang: Language) => void;
}

export default function Footer({ onNavigate, lang, onLangToggle }: FooterProps) {
  const t = LOCALIZED_DATA[lang].footer;
  const navTexts = LOCALIZED_DATA[lang].nav;

  return (
    <footer id="app-footer" className="w-full bg-[#090d13] border-t border-gray-900/80 text-gray-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          
          {/* Column 1: Info & Brand */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-black font-semibold font-display">
                QM
              </div>
              <span className="font-display font-semibold text-white tracking-widest text-md">
                QUANG MINH GROUP
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {t.about}
            </p>
            <div className="flex items-center gap-3 pt-2 text-gray-500">
              <Network className="w-4 h-4 hover:text-cyan-400 transition cursor-pointer" />
              <MessageSquare className="w-4 h-4 hover:text-cyan-400 transition cursor-pointer" />
              <Terminal className="w-4 h-4 hover:text-cyan-400 transition cursor-pointer" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display font-medium text-white text-sm uppercase tracking-wider mb-4">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-cyan-400 transition-colors">
                  {navTexts.home}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-cyan-400 transition-colors">
                  {navTexts.services}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-cyan-400 transition-colors">
                  {navTexts.projects}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-cyan-400 transition-colors">
                  {navTexts.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Language selection inside footer */}
          <div>
            <h4 className="font-display font-medium text-white text-sm uppercase tracking-wider mb-4">
              {t.language}
            </h4>
            <div className="flex flex-col items-start gap-2">
              <button
                onClick={() => onLangToggle('vi')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  lang === 'vi' 
                    ? 'bg-cyan-950/30 text-cyan-400 border border-cyan-800/40 font-medium' 
                    : 'text-gray-400 border border-transparent hover:text-white'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{t.vietnamese}</span>
              </button>
              <button
                onClick={() => onLangToggle('en')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  lang === 'en' 
                    ? 'bg-cyan-950/30 text-cyan-400 border border-cyan-800/40 font-medium' 
                    : 'text-gray-400 border border-transparent hover:text-white'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{t.english}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <p>{t.copyright}</p>
          <div className="flex items-center gap-1">
            <span>Powered with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>by Quang Minh Group</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
