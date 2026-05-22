import { motion } from "motion/react";

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export default function Header({ currentTab, setCurrentTab }: HeaderProps) {
  const menuItems = [
    { id: "trang-chu", label: "Trang chủ" },
    { id: "dich-vu", label: "Dịch vụ" },
    { id: "du-an", label: "Dự án" },
    { id: "lien-he", label: "Liên hệ" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <div 
          onClick={() => setCurrentTab("trang-chu")} 
          className="group flex cursor-pointer items-center space-x-2"
          id="header-logo-container"
        >
          <span className="text-2xl font-extrabold tracking-tight text-primary transition-colors group-hover:text-primary-dark">
            Dev<span className="text-accent-blue group-hover:text-cyan-500">Agency</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8" id="header-nav">
          {menuItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentTab(item.id)}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-primary font-semibold" : "text-primary/70 hover:text-primary"
                }`}
                id={`nav-item-${item.id}`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-border"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-accent-blue"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Call to action */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCurrentTab("lien-he")}
            className="rounded bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all hover:scale-[1.02] active:scale-[0.98]"
            id="btn-header-contact"
          >
            Liên Hệ Ngay
          </button>
        </div>
      </div>
    </header>
  );
}
