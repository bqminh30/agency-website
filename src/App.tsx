import React, { useState, useEffect } from 'react';
import { Language } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import QuoteChatWidget from './components/QuoteChatWidget';
import HomeView from './views/HomeView';
import ServicesView from './views/ServicesView';
import ProjectsView from './views/ProjectsView';
import ContactView from './views/ContactView';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [lang, setLang] = useState<Language>('vi');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // Load selected language from localStorage if exists
  useEffect(() => {
    const savedLang = localStorage.getItem('qmg_lang');
    if (savedLang === 'vi' || savedLang === 'en') {
      setLang(savedLang as Language);
    }
  }, []);

  const handleLangToggle = (selectedLang: Language) => {
    setLang(selectedLang);
    localStorage.setItem('qmg_lang', selectedLang);
  };

  // Scroll to top on navigation to guarantee a smooth interface reload
  const handleNavigate = (viewId: string) => {
    setCurrentView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="qmg-app-root" className="min-h-screen bg-[#0d1117] text-[#f0f6fc] font-sans flex flex-col justify-between selection:bg-cyan-500/30 selection:text-white">
      
      {/* Persisted Header Navigation */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        lang={lang}
        onLangToggle={handleLangToggle}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Main Multi-Screen Content Manager */}
      <main id="main-content-area" className="flex-grow pt-4">
        {currentView === 'home' && (
          <HomeView
            lang={lang}
            onNavigate={handleNavigate}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        )}
        {currentView === 'services' && (
          <ServicesView
            lang={lang}
            onNavigate={handleNavigate}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        )}
        {currentView === 'projects' && (
          <ProjectsView
            lang={lang}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        )}
        {currentView === 'contact' && (
          <ContactView
            lang={lang}
          />
        )}
      </main>

      {/* Persisted Footer */}
      <Footer
        onNavigate={handleNavigate}
        lang={lang}
        onLangToggle={handleLangToggle}
      />

      {/* STEP-BY-STEP PROJECT COST ESTIMATOR MODAL */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        lang={lang}
      />
      <QuoteChatWidget />

    </div>
  );
}
