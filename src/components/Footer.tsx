interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export default function Footer({ setCurrentTab }: FooterProps) {
  const links = [
    { label: "Facebook", href: "https://facebook.com/devagency" },
    { label: "LinkedIn", href: "https://linkedin.com/company/devagency" },
    { label: "GitHub", href: "https://github.com/devagency" },
    { label: "Chính sách bảo mật", href: "#", isTabChange: true, tabId: "lien-he" },
  ];

  return (
    <footer className="bg-primary py-12 text-white/80 border-t border-white/5" id="app-footer">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-extrabold tracking-tight text-white mb-2">
              Dev<span className="text-accent-cyan">Agency</span>
            </h3>
            <p className="text-sm text-white/60 max-w-sm">
              Đơn vị tư vấn và triển khai giải pháp công nghệ website, thiết kế giao diện đột phá và bảo mật cho doanh nghiệp SMEs và Startup.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
            {links.map((link, idx) => {
              if (link.isTabChange) {
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentTab(link.tabId)}
                    className="hover:text-accent-cyan transition-colors cursor-pointer"
                    id={`footer-btn-link-${idx}`}
                  >
                    {link.label}
                  </button>
                );
              }
              return (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-cyan transition-colors"
                  id={`footer-link-${idx}`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-white/40 gap-4">
          <p>© 2024 DevAgency. Tất cả các quyền được bảo lưu.</p>
          <p className="font-mono text-[10px] text-white/30">CRAFTED WITH PRECISION IN COGNITIVE WORKSPACE</p>
        </div>
      </div>
    </footer>
  );
}
