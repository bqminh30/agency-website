import { motion } from "motion/react";
import { 
  PenTool, 
  Code2, 
  ShoppingCart, 
  Settings, 
  ArrowRight, 
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { servicesData } from "../data";

interface ServicesViewProps {
  setCurrentTab: (tab: string) => void;
}

export default function ServicesView({ setCurrentTab }: ServicesViewProps) {
  // Mapping of icons based on string ID
  const getIcon = (iconName: string, isLight: boolean) => {
    const colorClass = isLight ? "text-white" : "text-primary";
    switch (iconName) {
      case "PenTool":
        return <PenTool className={`h-6 w-6 ${colorClass}`} />;
      case "Code2":
        return <Code2 className={`h-6 w-6 ${colorClass}`} />;
      case "ShoppingCart":
        return <ShoppingCart className={`h-6 w-6 ${colorClass}`} />;
      default:
        return <Settings className={`h-6 w-6 ${colorClass}`} />;
    }
  };

  return (
    <div className="bg-bg-light min-h-screen py-16" id="services-view-container">
      {/* Intro Hero banner */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-20 bg-grid-pattern py-12 rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-widest text-accent-blue uppercase">
              Dịch vụ của chúng tôi
            </span>
            <h1 className="text-4xl lg:text-5xl font-black text-primary leading-tight">
              Giải pháp công nghệ đột phá cho doanh nghiệp.
            </h1>
            <p className="text-base text-primary/70 leading-relaxed max-w-xl">
              Chúng tôi kết hợp tư duy thiết kế sáng tạo với năng lực kỹ thuật chuyên sâu để xây dựng những sản phẩm số vượt trội, giúp doanh nghiệp tối ưu quy trình và tăng trưởng bền vững.
            </p>
          </div>
          
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="aspect-[4/3] w-full max-w-sm rounded-[10px] overflow-hidden shadow-xl border border-primary/5">
              <img
                src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1200&auto=format&fit=crop"
                alt="Workspace with code"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid Services Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, idx) => {
            const isDarkHighlight = service.highlight;
            
            return (
              <div
                key={service.id}
                className={`relative rounded-xl p-8 border hover:shadow-xl transition-all flex flex-col justify-between ${
                  isDarkHighlight 
                    ? "bg-primary border-primary text-white shadow-xl shadow-primary-dark/10" 
                    : "bg-white border-primary/5 text-primary"
                }`}
                id={`detailed-service-card-${service.id}`}
              >
                {/* Header card info */}
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <span className={`text-[10px] uppercase tracking-wider ${isDarkHighlight ? "text-accent-cyan" : "text-primary/40"} font-mono`}>
                      SERVICE {service.number}
                    </span>
                    <div className={`p-3 rounded-lg ${isDarkHighlight ? "bg-accent-cyan/10 border border-accent-cyan/15" : "bg-bg-light border border-primary/5"}`}>
                      {getIcon(service.icon, isDarkHighlight || false)}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      {service.title}
                      {isDarkHighlight && <Sparkles className="h-4 w-4 text-accent-cyan animate-pulse" />}
                    </h3>
                    <p className={`text-sm leading-relaxed ${isDarkHighlight ? "text-white/80" : "text-primary/75"}`}>
                      {service.desc}
                    </p>
                  </div>

                  {/* Bullet Lists */}
                  <div className={`space-y-3 pt-4 border-t ${isDarkHighlight ? "border-white/10" : "border-primary/5"}`}>
                    {service.bullets.map((bullet, bulletIdx) => (
                      <div key={bulletIdx} className="flex items-start space-x-2.5">
                        <CheckCircle2 className={`h-4 w-4 mt-0.5 flex-shrink-0 ${isDarkHighlight ? "text-accent-cyan" : "text-accent-blue"}`} />
                        <span className={`text-xs ${isDarkHighlight ? "text-white/90" : "text-primary/80"}`}>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags and arrows */}
                <div className={`mt-8 pt-6 border-t ${isDarkHighlight ? "border-white/10" : "border-primary/5"} flex flex-wrap justify-between items-center gap-4`}>
                  {/* Tech badges / tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags?.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className={`text-[10px] font-bold px-2.5 py-1 rounded ${
                          isDarkHighlight 
                            ? "bg-white/10 text-white border border-white/5" 
                            : "bg-bg-light text-accent-blue border border-primary/5"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow action button */}
                  {isDarkHighlight ? (
                    <button 
                      onClick={() => setCurrentTab("lien-he")}
                      className="text-xs font-bold text-accent-cyan hover:underline flex items-center space-x-1"
                      id={`btn-service-action-${service.id}`}
                    >
                      <span>Trải nghiệm ngay</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setCurrentTab("lien-he")}
                      className="p-2 rounded-full border border-primary/10 hover:bg-primary hover:text-white transition-colors text-primary"
                      id={`btn-service-action-${service.id}`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* Sub-image inside block (if exists) */}
                {service.image && !isDarkHighlight && (
                  <div className="mt-6 aspect-[16/6] w-full rounded overflow-hidden border border-primary/5 shadow-sm">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover opacity-80"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Banner CTA */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl bg-primary text-white p-12 text-center bg-grid-pattern-dark relative overflow-hidden shadow-lg border border-white/5">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <p className="text-xs uppercase tracking-widest text-accent-cyan font-bold font-mono">
              BẮT ĐẦU NGAY HÔM NAY
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Sẵn sàng để bắt đầu dự án của bạn?
            </h2>
            <p className="text-sm text-white/70 max-w-lg mx-auto">
              Hãy liên hệ với đội ngũ chuyên gia của DevAgency để nhận được sự tư vấn kỹ thuật chuyên sâu và bảng giá chi tiết nhất cho ý tưởng đột phá của bạn.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setCurrentTab("lien-he")}
                className="rounded bg-accent-cyan hover:bg-cyan-400 text-black px-6 py-3 text-sm font-bold shadow-md transition-all text-glow-cyan"
                id="btn-services-contact-now"
              >
                Liên hệ tư vấn ngay
              </button>
              <button
                onClick={() => setCurrentTab("du-an")}
                className="rounded border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3 text-sm font-bold transition-all text-white"
                id="btn-services-view-projects"
              >
                Xem dự án tiêu biểu
              </button>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none" />
        </div>
      </section>
    </div>
  );
}
