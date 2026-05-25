import React from 'react';
import { Check, Settings, Code, Layers, FileCode, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { Language } from '../types';
import { LOCALIZED_DATA, CORE_SERVICES } from '../data';

interface ServicesViewProps {
  lang: Language;
  onNavigate: (view: string) => void;
  onOpenQuote: () => void;
}

export default function ServicesView({ lang, onNavigate, onOpenQuote }: ServicesViewProps) {
  const p = LOCALIZED_DATA[lang].servicesPage;

  // Render variables matching the generated paths
  const workspaceHeroImgSpec = '/src/assets/images/workspace_hero_1779681117807.png';
  const serverRoomImgSpec = '/src/assets/images/server_room_1779681144148.png';

  return (
    <div id="services-page" className="space-y-24 pb-20 animate-fade-in">
      
      {/* Services Hero Header */}
      <section id="services-intro" className="pt-8 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-bold">
                {p.badge}
              </span>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                {p.title}{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  {p.titleAccent}
                </span>
                {p.titleSuffix}
              </h1>
              <p className="text-sm sm:text-md text-gray-400 leading-relaxed">
                {p.subtitle}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-gray-900 overflow-hidden shadow-xl bg-gray-900/30">
                <img
                  src={workspaceHeroImgSpec}
                  alt="Enterprise Custom Code Workspace"
                  className="w-full object-cover aspect-[4/3] opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Grid: Core Service Deliverables */}
      <section id="services-matrix-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 01 Design (Design UI/UX) */}
          <div className="lg:col-span-8 p-8 rounded-2xl border border-gray-800 bg-[#161b22]/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl" />
            
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest">01 / CONCEPT ART</span>
              <span className="text-gray-600 font-mono text-xs">EST. 2024</span>
            </div>

            <h3 className="text-2xl font-display font-bold text-white mb-3">01. Thiết kế UI/UX</h3>
            
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xl">
              Chúng tôi tập trung vào trải nghiệm người dùng cuối, tạo ra những giao diện không chỉ đẹp mắt mà còn tối ưu hóa hành trình khách hàng, tăng tỷ lệ chuyển đổi trong kỷ nguyên số.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                'Nghiên cứu người dùng (UX Research)',
                'Thiết kế tương tác (Interaction Design)',
                'Prototyping & Testing',
                'Hệ thống thiết kế (Design Systems)',
              ].map(bullet => (
                <div key={bullet} className="flex items-center gap-2 text-xs text-gray-300">
                  <div className="w-4 h-4 rounded-full bg-cyan-950/40 text-cyan-400 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>{lang === 'vi' ? 'KHỞI TẠO BẢN THẢO PHÁC THẢO' : 'INITIALIZE WIREFRAME'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 02 Design (Web Dev) is highlighted & dark blue theme */}
          <div className="lg:col-span-4 p-8 rounded-2xl border border-blue-900 bg-gradient-to-b from-[#111827] to-[#0f172a] relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="absolute top-4 right-4 text-[10px] bg-blue-500/20 text-blue-400 font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              ENTERPRISE READY
            </div>

            <div className="space-y-6">
              <span className="font-mono text-xs text-blue-400 font-bold block">02 / CORE DEVELOPMENT</span>
              
              <h3 className="text-2xl font-display font-bold text-white">02. Phát triển Website</h3>
              
              <p className="text-xs text-gray-400 leading-relaxed">
                Xây dựng hệ thống Frontend & Backend mạnh mẽ, bảo mật cao và dễ dàng mở rộng theo quy mô doanh nghiệp của bạn.
              </p>

              <div className="space-y-2">
                {['React/Next.js/HTML5', 'Node.js & Go Engines', 'Full-stack Typescript'].map(t => (
                  <div key={t} className="flex items-center gap-2 text-xs text-blue-300 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="w-full mt-8 py-3 rounded-xl text-center text-xs font-mono font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition"
            >
              {lang === 'vi' ? 'Phát triển dự án ngay' : 'Launch Build Stack'}
            </button>
          </div>

          {/* Card 03 (Thương mại điện tử) */}
          <div className="lg:col-span-4 p-8 rounded-2xl border border-gray-800 bg-[#161b22]/30 relative overflow-hidden flex flex-col justify-between group hover:border-gray-700 transition-colors">
            <div className="space-y-4">
              <span className="font-mono text-xs text-cyan-400/80 font-bold block">03 / TRANSACTION FLOWS</span>
              <h3 className="text-xl font-display font-bold text-white mb-2">03. Thương mại điện tử</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Giải pháp bán hàng trực tuyến toàn diện, từ quản lý kho bãi tự động đến tích hợp hệ thống kiểm soát hóa đơn, cổng thanh toán đa dạng.
              </p>
              
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Custom Shopify & WooCommerce</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Tích hợp Stripe / MoMo / VNPay</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="mt-6 flex items-center gap-2 text-xs font-mono tracking-wider font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>{lang === 'vi' ? 'XEM GIẢI PHÁP SỐ' : 'PREVIEW SYSTEM'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 04 Maintenance and Ops */}
          <div className="lg:col-span-5 p-8 rounded-2xl border border-gray-800 bg-[#161b22]/30 relative overflow-hidden flex flex-col justify-between group hover:border-gray-700 transition-colors">
            <div className="space-y-4">
              <span className="font-mono text-xs text-cyan-400/80 font-bold block">04 / OPERATIONS SLA</span>
              <h3 className="text-xl font-display font-bold text-white mb-2">04. Bảo trì & Vận hành</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Đảm bảo website/app của bạn luôn hoạt động 24/7 với hiệu suất cao nhất và khả năng bảo mật an toàn an ninh tuyệt đối khỏi mã độc.
              </p>
              <div className="space-y-1.5 pt-2 text-xs text-gray-400 font-sans">
                <p>• Giới hạn lỗi kỹ thuật tức thì</p>
                <p>• Sao lưu đám mây liên tục hàng ngày</p>
              </div>
            </div>

            <button 
              onClick={() => onNavigate('contact')}
              className="mt-6 py-2.5 border border-gray-800 hover:border-gray-700 hover:bg-gray-900/40 text-center rounded-xl text-xs font-mono font-semibold text-gray-300 transition"
            >
              Yêu cầu bảo trì ngay
            </button>
          </div>

          {/* Graphic Card 5 (Database infrastructure Server room) as preview placeholder inside matrix matching Screen 1 bottom-right */}
          <div className="lg:col-span-3 rounded-2xl border border-gray-800 overflow-hidden relative group">
            <img
              src={serverRoomImgSpec}
              alt="System Storage Infrastructure"
              className="w-full h-full object-cover opacity-60 min-h-[220px] transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            
            {/* Server health metrics decoration */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono">
              <div className="flex items-center gap-1.5 text-cyan-400">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>INFRA DB.LIVE</span>
              </div>
              <span className="text-gray-400">99.99%</span>
            </div>
          </div>

        </div>
      </section>

      {/* Conversion / Lead-magnet Banner at footer */}
      <section id="services-cta" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-blue-900 bg-gradient-to-br from-[#111827] via-[#090d16] to-black p-8 sm:p-12 overflow-hidden text-center sm:text-left">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                {p.ctas.title}
              </h2>
              <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
                {p.ctas.desc}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition text-center shadow-lg"
              >
                {p.ctas.btnContact}
              </button>
              <button
                onClick={onOpenQuote}
                className="px-6 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-gray-300 border border-gray-800 hover:text-white hover:bg-gray-900/30 hover:border-gray-700 transition text-center"
              >
                {p.ctas.btnPricing}
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
