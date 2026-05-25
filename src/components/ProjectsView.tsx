import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projectsData } from "../data";
import { Sparkles } from "lucide-react";

interface ProjectsViewProps {
  setCurrentTab: (tab: string) => void;
}

export default function ProjectsView({ setCurrentTab }: ProjectsViewProps) {
  const [filter, setFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: "Tất cả" },
    { id: "saas", label: "Quản lý (SaaS)" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "mobile", label: "Ứng dụng di động" },
    { id: "fintech", label: "Fintech" }
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  return (
    <div className="bg-bg-light min-h-screen py-10" id="projects-view-container">
      {/* Intro hero section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-6 mb-16">
        <h1 className="text-4xl lg:text-5xl font-black text-primary leading-tight max-w-4xl mx-auto">
          Kiến tạo trải nghiệm số <span className="text-accent-blue">đẳng cấp</span>
        </h1>
        <p className="text-base text-primary/70 max-w-2xl mx-auto leading-relaxed">
          Khám phá các dự án tiêu biểu chúng tôi đã thực hiện cho khách hàng toàn cầu, từ các nền tảng quản trị phức tạp đến các ứng dụng di động tinh tế.
        </p>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-8" id="project-filters">
          {filterTabs.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/15 scale-102"
                    : "bg-white border border-primary/10 text-primary/80 hover:bg-bg-light hover:border-primary/25 hover:text-primary"
                }`}
                id={`filter-tab-${tab.id}`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects Grid Display with Animation */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="projects-grid-container"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="bg-white border border-primary/5 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
                id={`project-card-${project.id}`}
              >
                <div>
                  <div className="relative aspect-[16/11] overflow-hidden bg-zinc-100 border-b border-primary/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <span className="text-[10px] font-bold tracking-widest text-accent-blue uppercase">
                      {project.categoryLabel}
                    </span>
                    <h3 className="text-lg font-bold text-primary group-hover:text-accent-blue transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-primary/70 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-primary/5 mt-4 flex flex-wrap gap-1.5 pt-4">
                  {project.tech?.map((techText, techIdx) => (
                    <span 
                      key={techIdx}
                      className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-bg-light text-primary/60 border border-primary/5 font-mono"
                    >
                      {techText}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Ideas banner */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl bg-primary text-white p-12 text-center bg-grid-pattern-dark relative overflow-hidden shadow-lg border border-white/5">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Bạn có ý tưởng tuyệt vời?
            </h2>
            <p className="text-sm text-white/70 max-w-lg mx-auto leading-relaxed">
              Hãy để chúng tôi giúp bạn hiện thực hóa nó bằng công nghệ định hình tương lai và thiết kế sáng tạo đột phá từ các chuyên gia hàng đầu.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setCurrentTab("lien-he")}
                className="rounded bg-accent-cyan hover:bg-cyan-400 text-black px-8 py-3.5 text-sm font-bold shadow-md transition-all text-glow-cyan"
                id="btn-projects-start-project"
              >
                BẮT ĐẦU DỰ ÁN NGAY
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none" />
        </div>
      </section>
    </div>
  );
}
