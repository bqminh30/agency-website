import React, { useState } from 'react';
import { Menu, X, Globe, ChevronDown, Calculator } from 'lucide-react';
import { Language } from '../types';
import { LOCALIZED_DATA } from '../data';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  lang: Language;
  onLangToggle: (lang: Language) => void;
  onOpenQuote: () => void;
}

export default function Header({ currentView, onNavigate, lang, onLangToggle, onOpenQuote }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const t = LOCALIZED_DATA[lang].nav;

  const navItems = [
    { id: 'home', label: t.home },
    { id: 'services', label: t.services },
    { id: 'projects', label: t.projects },
    { id: 'contact', label: t.contact },
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
  };

  return (
    <header id="app-header" className="sticky top-0 z-40 w-full border-b border-gray-900/60 bg-[#0d1117]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <div id="header-logo" className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-black font-semibold font-display shadow-md shadow-cyan-950/20">
              QM
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-wider bg-gradient-to-r from-white via-gray-100 to-cyan-400 bg-clip-text text-transparent">
                QUANG MINH
              </span>
              <span className="block text-[9px] font-mono text-cyan-400 tracking-widest uppercase leading-none">
                TECH GROUP
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  currentView === item.id 
                    ? 'text-white bg-gray-900/40 font-semibold' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-900/20'
                }`}
              >
                {item.label}
                {currentView === item.id && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400" />
                )}
              </button>
            ))}
          </nav>

          {/* Actions panel */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Language Selector Dropdown */}
            <div id="language-picker" className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-800 bg-gray-900/20 text-sm text-gray-400 hover:text-white hover:border-gray-700 transition"
              >
                <Globe className="w-4 h-4" />
                <span className="font-mono text-xs uppercase">{lang}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 rounded-lg border border-gray-800 bg-[#0d1117] p-1 shadow-xl z-50 animate-drop-in">
                  <button
                    onClick={() => {
                      onLangToggle('vi');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs rounded-md flex items-center justify-between ${
                      lang === 'vi' ? 'bg-cyan-950/30 text-cyan-400 font-medium' : 'text-gray-400 hover:bg-gray-900/40 hover:text-white'
                    }`}
                  >
                    Tiếng Việt
                  </button>
                  <button
                    onClick={() => {
                      onLangToggle('en');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs rounded-md flex items-center justify-between ${
                      lang === 'en' ? 'bg-cyan-950/30 text-cyan-400 font-medium' : 'text-gray-400 hover:bg-gray-900/40 hover:text-white'
                    }`}
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            {/* Quote CTA Trigger */}
            <button
              onClick={onOpenQuote}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-black bg-cyan-400 hover:bg-cyan-300 shadow-lg shadow-cyan-950/30 active:scale-95 transition-all"
            >
              <Calculator className="w-4 h-4" />
              <span>{t.getQuote}</span>
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => onLangToggle(lang === 'vi' ? 'en' : 'vi')}
              className="p-2 border border-gray-800 rounded-lg text-gray-400 hover:text-white bg-gray-900/20"
            >
              <Globe className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-gray-800 bg-gray-900/20 text-gray-400 hover:text-white hover:border-gray-700 transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-panel" className="md:hidden border-b border-gray-900 bg-[#0d1117]/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-3">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-md font-medium transition ${
                currentView === item.id 
                  ? 'bg-cyan-950/20 text-cyan-400 font-semibold border-l-2 border-cyan-400' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-900/20'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-gray-900 flex flex-col gap-3">
            <button
              onClick={() => {
                onOpenQuote();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition"
            >
              <Calculator className="w-4 h-4" />
              {t.getQuote}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
