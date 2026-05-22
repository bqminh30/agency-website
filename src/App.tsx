/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";

// Lazy-loaded components for optimal bundle splitting and performance
const ServicesView = lazy(() => import("./components/ServicesView"));
const ProjectsView = lazy(() => import("./components/ProjectsView"));
const ContactView = lazy(() => import("./components/ContactView"));
const ChatbotWidget = lazy(() => import("./components/ChatbotWidget"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

// Premium skeleton loading component for beautiful tab transition UX
function ViewLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12" id="view-loader-element">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-primary/10"></div>
        <div className="absolute inset-0 rounded-full border-4 border-accent-cyan border-t-transparent animate-spin"></div>
      </div>
      <p className="mt-4 text-xs font-bold uppercase tracking-widest text-primary/50 animate-pulse font-sans">
        Đang tải trải nghiệm...
      </p>
    </div>
  );
}

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("trang-chu");

  // Scroll to top upon tab selection change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [currentTab]);

  const renderActiveView = () => {
    switch (currentTab) {
      case "trang-chu":
        return (
          <HomeView 
            setCurrentTab={setCurrentTab} 
          />
        );
      case "dich-vu":
        return (
          <Suspense fallback={<ViewLoader />}>
            <ServicesView 
              setCurrentTab={setCurrentTab} 
            />
          </Suspense>
        );
      case "du-an":
        return (
          <Suspense fallback={<ViewLoader />}>
            <ProjectsView 
              setCurrentTab={setCurrentTab} 
            />
          </Suspense>
        );
      case "lien-he":
        return (
          <Suspense fallback={<ViewLoader />}>
            <ContactView />
          </Suspense>
        );
      default:
        return (
          <HomeView 
            setCurrentTab={setCurrentTab} 
          />
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen" id="app-root-wrapper">
      {/* Sticky Header */}
      <Header 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
      />

      {/* Primary Dynamic Main Sections */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            id={`tab-wrapper-${currentTab}`}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer setCurrentTab={setCurrentTab} />

      {/* Floating AI Chatbot Widget */}
      <Suspense fallback={null}>
        <ChatbotWidget />
      </Suspense>

      {/* Floating Scroll To Top Button with dynamic falling entry */}
      <Suspense fallback={null}>
        <ScrollToTop />
      </Suspense>
    </div>
  );
}

