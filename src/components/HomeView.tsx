import { motion } from "motion/react";
import { 
  Code, 
  Compass, 
  ShoppingCart, 
  ShieldCheck, 
  Zap, 
  Headphones, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { statsData, projectsData } from "../data";

interface HomeViewProps {
  setCurrentTab: (tab: string) => void;
}

export default function HomeView({ setCurrentTab }: HomeViewProps) {
  // 3 Strategic Services
  const strategicServices = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Web Development",
      desc: "Xây dựng hệ thống backend mạnh mẽ và frontend mượt mà sử dụng các công nghệ hiện đại nhất như React, Next.js và Node.js.",
      bullets: ["Tối ưu SEO & Tốc độ", "Bảo mật đa tầng"]
    },
    {
      icon: <Compass className="h-6 w-6 text-primary" />,
      title: "UI/UX Design",
      desc: "Thiết kế giao diện tinh tế, hiện đại kết hợp với trải nghiệm người dùng tối ưu giúp tăng tỷ lệ chuyển đổi khách hàng.",
      bullets: ["Prototyping tương tác", "Design System chuẩn"]
    },
    {
      icon: <ShoppingCart className="h-6 w-6 text-primary" />,
      title: "E-commerce",
      desc: "Giải pháp bán hàng trực tuyến toàn diện, tích hợp thanh toán tự động và quản lý kho hàng thông minh, hiệu quả.",
      bullets: ["Thanh toán đa kênh", "Scale không giới hạn"]
    }
  ];

  // 3 Reasons Why
  const reasons = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-accent-cyan" />,
      title: "Chất lượng cam kết",
      desc: "Mọi sản phẩm đều trải qua quy trình kiểm thử nghiêm ngặt trước khi bàn giao cho khách hàng."
    },
    {
      icon: <Zap className="h-6 w-6 text-accent-cyan" />,
      title: "Tiến độ thần tốc",
      desc: "Quy trình Agile giúp chúng tôi tối ưu hóa thời gian triển khai mà không ảnh hưởng tới chất lượng."
    },
    {
      icon: <Headphones className="h-6 w-6 text-accent-cyan" />,
      title: "Hỗ trợ 24/7",
      desc: "Đội ngũ kỹ thuật luôn sẵn sàng hỗ trợ bạn vận hành và nâng cấp hệ thống bất cứ lúc nào."
    }
  ];

  // Only take 2 featured projects for Home
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <div className="bg-bg-light min-h-screen" id="home-view-container">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-grid-pattern">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8">
              <span className="inline-flex items-center gap-1.5 rounded bg-accent-blue/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-blue border border-accent-blue/20">
                <Sparkles className="h-3 w-3 animate-pulse" /> Công nghệ dẫn đầu
              </span>
              
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-primary leading-tight">
                Kiến tạo tương lai số cho doanh nghiệp của bạn
              </h1>
              
              <p className="text-base lg:text-lg text-primary/75 leading-relaxed max-w-xl">
                Chúng tôi xây dựng các giải pháp website hiệu suất cao, giao diện đột phá và hạ tầng kỹ thuật vững chắc để giúp thương hiệu của bạn tỏa sáng trong kỷ nguyên số.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setCurrentTab("lien-he")}
                  className="rounded bg-accent-cyan hover:bg-cyan-400 text-black px-8 py-3.5 text-sm font-bold shadow-md hover:shadow-cyan-400/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-2"
                  id="btn-hero-quote"
                >
                  <span>Bắt đầu ngay</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setCurrentTab("du-an")}
                  className="rounded border border-primary/20 bg-white/50 backdrop-blur-sm px-8 py-3.5 text-sm font-semibold text-primary hover:bg-white hover:border-primary transition-all"
                  id="btn-hero-projects"
                >
                  Xem dự án
                </button>
              </div>
            </div>

            {/* Right Asset / Computer View */}
            <div className="lg:col-span-6 relative flex justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-lg aspect-[4/3] rounded-xl overflow-hidden shadow-2xl bg-primary border border-white/10 group"
              >
                {/* Computer Screen Frame simulation with an beautiful workspace image */}
                <img
                  src="https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=1200&auto=format&fit=crop"
                  alt="DevAgency Workspace Setup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                />
                
                {/* Embedded Lighthouse score overlay bottom right */}
                <div className="absolute bottom-4 right-4 bg-primary/95 backdrop-blur border border-white/10 px-4 py-2 rounded-lg flex items-center gap-3 shadow-lg select-none">
                  <div className="relative flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center text-[11px] font-extrabold text-emerald-400">
                      99
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-white/50">Performance</p>
                    <p className="text-xs font-semibold text-emerald-400">Lighthouse Checked</p>
                  </div>
                </div>

                {/* Abstract decorative accent badge top-left */}
                <div className="absolute top-4 left-4 bg-[#00F5FF]/10 backdrop-blur border border-[#00F5FF]/30 p-2 rounded-lg">
                  <Code className="h-5 w-5 text-accent-cyan" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Services Section */}
      <section className="py-24 border-t border-primary/5 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Dịch vụ chiến lược
            </h2>
            <p className="text-base text-primary/70 leading-relaxed">
              Tập trung vào hiệu quả kinh doanh thông qua các giải pháp kỹ thuật tinh vi và tư duy thiết kế lấy người dùng làm trung tâm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strategicServices.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(0, 43, 77, 0.08)" }}
                className="relative bg-bg-light/50 border border-primary/5 rounded-xl p-8 flex flex-col justify-between transition-all group"
                id={`strategic-service-card-${idx}`}
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center border border-primary/5">
                    {service.icon}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                    <p className="text-sm text-primary/75 leading-relaxed">{service.desc}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-primary/5 space-y-2">
                  {service.bullets.map((bullet, bulletIdx) => (
                    <div key={bulletIdx} className="flex items-center space-x-2 text-xs text-primary/80 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (Dark Block) */}
      <section className="py-24 bg-primary text-white bg-grid-pattern-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Core Merits */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
                  Tại Sao Chọn <span className="text-accent-cyan">DevAgency?</span>
                </h2>
                <p className="text-sm lg:text-base text-white/70 max-w-xl">
                  Chúng tôi không chỉ viết code, chúng tôi xây dựng nền tảng vững chắc nhất cho sự tăng trưởng vượt bậc của doanh nghiệp bạn.
                </p>
              </div>

              <div className="space-y-8">
                {reasons.map((reason, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="mt-1 flex-shrink-0 p-3 bg-white/5 border border-white/10 rounded-lg">
                      {reason.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{reason.title}</h3>
                      <p className="text-sm text-white/70 leading-relaxed max-w-lg">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Numerical Stats Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {statsData.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 text-center space-y-2 hover:bg-white/10 transition-colors"
                >
                  <p className="text-3xl lg:text-4xl font-black text-accent-cyan tracking-tight">{stat.value}</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/90">{stat.label}</p>
                  <p className="text-[11px] text-white/50 leading-tight">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Dự Án Tiêu Biểu
            </h2>
            <p className="text-base text-primary/70">
              Khám phá cách chúng tôi giúp các đối tác chuyển đổi số thành công vượt bậc thông qua các giải pháp công nghệ thời thượng nhất.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featuredProjects.map((project, idx) => (
              <div 
                key={idx} 
                onClick={() => setCurrentTab("du-an")}
                className="group cursor-pointer space-y-4"
                id={`featured-project-${project.id}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-primary/5 shadow-md bg-zinc-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-primary font-bold px-6 py-2.5 rounded shadow text-xs uppercase tracking-wider">
                      Chi tiết dự án
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <span className="text-[10px] font-bold tracking-widest text-[#006c71] uppercase">
                    {project.categoryLabel}
                  </span>
                  <h3 className="text-lg font-bold text-primary group-hover:text-accent-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-primary/70 leading-relaxed line-clamp-2">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="pb-24 bg-white px-6">
        <div className="mx-auto max-w-5xl rounded-2xl bg-primary-dark text-white p-12 lg:p-16 relative overflow-hidden bg-grid-pattern-dark text-center shadow-lg">
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
              Sẵn sàng để số hóa doanh nghiệp?
            </h2>
            <p className="text-sm lg:text-base text-white/80 leading-relaxed">
              Hãy để chúng tôi đồng hành cùng bạn trên hành trình chinh phục không gian số và tạo ra những giá trị đột phá cho thương hiệu.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setCurrentTab("lien-he")}
                className="rounded bg-accent-cyan hover:bg-cyan-400 text-black px-8 py-3.5 text-sm font-bold shadow-md hover:shadow-cyan-400/20 hover:scale-105 transition-all text-glow-cyan"
                id="btn-cta-start-project"
              >
                Bắt đầu dự án ngay
              </button>
            </div>
          </div>
          
          {/* Subtle glowing abstract light effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-blue/20 rounded-full blur-[100px] pointer-events-none" />
        </div>
      </section>
    </div>
  );
}
