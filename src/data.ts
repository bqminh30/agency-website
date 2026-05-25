<<<<<<< HEAD
import { Project, ServiceDetail } from './types';

export const LOCALIZED_DATA = {
  vi: {
    nav: {
      home: 'Trang chủ',
      services: 'Dịch vụ',
      whyUs: 'Tại sao chọn chúng tôi',
      projects: 'Dự án',
      contact: 'Liên hệ',
      getQuote: 'Yêu Cầu Báo Giá',
    },
    hero: {
      badge: 'ENGINEERING EXCELLENCE',
      title: 'Định nghĩa Lại Tương lai Qua',
      titleAccent: 'Phần Mềm Tùy Chỉnh.',
      subtitle: 'Chúng tôi cung cấp các giải pháp công nghệ tiên tiến từ App, Web Design đến SEO chuyên sâu và Hệ thống AI tự động hóa.',
      btnStart: 'Bắt Đầu Ngay',
      btnServices: 'Xem Dịch Vụ',
      qualityCommitment: '100% CAM KẾT CHẤT LƯỢNG',
    },
    aboutCompact: {
      title: 'Sức Mạnh Từ Một Chuyên Gia',
      desc: 'Quang Minh Group không chỉ là một đơn vị công nghệ; chúng tôi là đối tác chiến lược vận hành bởi tư duy tinh gọn. Với tâm thế của một "one-member tech powerhouse", chúng tôi tập trung tối đa vào chất lượng kỹ thuật, loại bỏ các rào cản hành chính để mang đến sản phẩm nhanh hơn, thông minh hơn và hiệu quả hơn.',
    },
    servicesCompact: {
      title: 'Dịch Vụ Chuyên Sâu',
      subtitle: 'Giải pháp công nghệ toàn diện cho doanh nghiệp hiện đại.',
      cards: [
        {
          id: 's_app',
          title: 'Phát Triển Ứng Dụng',
          desc: 'Xây dựng ứng dụng di động native và cross-platform (iOS/Android) với trải nghiệm mượt mà và hiệu năng tối ưu.',
          linkText: 'Tìm hiểu thêm',
        },
        {
          id: 's_web',
          title: 'Thiết Kế Web',
          desc: 'Website chuẩn UI/UX, tối ưu chuyển đổi và tốc độ tải trang cực nhanh.',
          tag: 'LEGACY READY',
          isDark: true,
        },
        {
          id: 's_seo',
          title: 'SEO Chuyên Sâu',
          desc: 'Đưa doanh nghiệp của bạn lên trang đầu kết quả tìm kiếm với chiến lược content và technical SEO bền vững.',
        },
        {
          id: 's_ai',
          title: 'AI Chatbots',
          desc: 'Tích hợp trí tuệ nhân tạo để tự động hóa quy trình chăm sóc khách hàng 24/7.',
        },
        {
          id: 's_auto',
          title: 'Automation Tools',
          desc: 'Công cụ tự động hóa tùy chỉnh giúp tiết kiệm hàng trăm giờ làm việc thủ công mỗi tháng.',
        },
      ],
    },
    whyUsSection: {
      title: 'Tại Sao Chọn',
      titleAccent: 'Quang Minh Group?',
      description: 'Chúng tôi không chỉ viết code, chúng tôi xây dựng nền tảng cho sự tăng trưởng của bạn.',
      reasons: [
        {
          id: 'r1',
          title: 'Tốc Độ Phản Hồi',
          desc: 'Mô hình làm việc trực tiếp giúp giải quyết vấn đề ngay lập tức mà không qua các tầng trung gian.',
        },
        {
          id: 'r2',
          title: 'Kỹ Thuật Bậc Thầy',
          desc: 'Mọi dòng code đều được tối ưu hóa cho bảo mật, mở rộng và hiệu năng cao nhất.',
        },
        {
          id: 'r3',
          title: 'Đổi Mới Liên Tục',
          desc: 'Luôn cập nhật những công nghệ AI và framework mới nhất để mang lại lợi thế cạnh tranh.',
        },
      ],
      stats: [
        { value: '99%', label: 'Uptime Guaranteed' },
        { value: '24/7', label: 'Monitoring & Support' },
        { value: '150+', label: 'Projects Delivered' },
        { value: '10x', label: 'Faster Deployment' },
      ],
    },
    servicesPage: {
      badge: 'DỊCH VỤ CỦA CHÚNG TÔI',
      title: 'Giải pháp công nghệ',
      titleAccent: 'đột phá',
      titleSuffix: ' cho doanh nghiệp.',
      subtitle: 'Chúng tôi kết hợp tư duy thiết kế sáng tạo với năng lực kỹ thuật chuyên sâu để xây dựng những sản phẩm số vượt trội, giúp doanh nghiệp tối ưu quy trình và tăng trưởng bền vững.',
      ctas: {
        title: 'Sẵn sàng để bắt đầu dự án của bạn?',
        desc: 'Hãy liên hệ với đội ngũ chuyên gia của Quang Minh Group để nhận được sự tư vấn chuyên sâu và báo giá chi tiết nhất cho ý tưởng của bạn.',
        btnContact: 'Liên hệ tư vấn ngay',
        btnPricing: 'Xem bảng giá dịch vụ',
      },
    },
    projectsPage: {
      badge: 'DANH MỤC DỰ ÁN',
      title: 'Kiến tạo trải nghiệm số',
      titleAccent: 'đẳng cấp',
      subtitle: 'Khám phá cách chúng tôi giúp các đối tác toàn cầu chuyển đổi số thành công bằng công nghệ tiên tiến và thiết kế tinh tế.',
      filterAll: 'Tất cả',
      ctaTitle: 'Bạn có ý tưởng tuyệt vời?',
      ctaDesc: 'Hãy để chúng tôi giúp bạn hiện thực hóa nó bằng công nghệ đỉnh cao và thiết kế sáng tạo.',
      ctaBtn: 'BẮT ĐẦU DỰ ÁN NGAY',
    },
    contactPage: {
      title: 'Hãy Bắt Đầu Dự Án',
      titleSuffix: 'Của Bạn.',
      subtitle: 'Sẵn sàng để đưa ý tưởng của bạn thành hiện thực? Hãy để lại thông tin, chúng tôi sẽ liên hệ tư vấn giải pháp tối ưu nhất trong vòng 24h.',
      emailLabel: 'Email',
      phoneLabel: 'Điện thoại',
      addressLabel: 'Địa chỉ',
      followUs: 'THEO DÕI CHÚNG TÔI',
      form: {
        name: 'HỌ TÊN',
        namePlaceholder: 'Nguyễn Văn A',
        email: 'EMAIL',
        emailPlaceholder: 'example@gmail.com',
        service: 'DỊCH VỤ QUAN TÂM',
        serviceChoose: 'Chọn dịch vụ...',
        serviceOptions: [
          'Phát triển ứng dụng di động',
          'Thiết kế & Phát triển Website',
          'Thương mại điện tử chuyên sâu',
          'Tích hợp Hệ thống AI / Chatbot',
          'Hệ thống Tự động hóa & Khác',
        ],
        message: 'LỜI NHẮN',
        messagePlaceholder: 'Mô tả ngắn gọn yêu cầu của bạn...',
        btnSubmit: 'Gửi Yêu Cầu Tư Vấn',
        success: 'Yêu cầu của bạn đã được gửi thành công! Chúng tôi sẽ liên hệ trong vòng 24 giờ.',
        disclaimer: 'Bằng cách gửi form này, bạn đồng ý với Chính sách bảo mật của chúng tôi.',
      },
    },
    footer: {
      about: 'Chuyên gia phát triển phần mềm tùy chỉnh, AI và SEO. Mang đến giải pháp kỹ thuật vượt trội cho doanh nghiệp.',
      quickLinks: 'Quick Links',
      language: 'Language',
      vietnamese: 'Tiếng Việt',
      english: 'English',
      copyright: '© 2026 Quang Minh Group. Engineering Excellence in Custom Software.',
    },
    quoteEstimator: {
      title: 'Bảng Ước Tính Chi Phí Dự Án',
      subtitle: 'Trả lời nhanh 4 câu hỏi để nhận báo giá sơ bộ ngay lập tức.',
      step1: '1. Loại hình dự án của bạn là gì?',
      step2: '2. Quy mô & Độ phức tạp dự án?',
      step3: '3. Bạn cần triển khai trong bao lâu?',
      step4: '4. Thông tin liên hệ của bạn',
      prev: 'Quay lại',
      next: 'Tiếp tục',
      submit: 'Nhận Báo Giá Ngay',
      complexity: {
        basic: 'Cơ bản / MVP (Ít tính năng, giao diện đơn giản)',
        medium: 'Trung bình (Đầy đủ tính năng cốt lõi, tích hợp API)',
        advanced: 'Nâng cao / Enterprise (Hệ thống lớn, bảo mật cao, tải trọng lớn)',
      },
      timeline: {
        fast: 'Gấp (Dưới 1 tháng)',
        normal: 'Bình thường (1 - 3 tháng)',
        flex: 'Thoải mái (Trên 3 tháng)',
      },
      resultTitle: 'Báo Giá Ước Tính',
      resultDesc: 'Dựa trên lựa chọn của bạn, mức giá đầu tư sơ bộ dao động khoảng:',
      resultCall: 'Gửi báo giá chính thức qua Email',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      whyUs: 'Why Us',
      projects: 'Projects',
      contact: 'Contact',
      getQuote: 'Get a Quote',
    },
    hero: {
      badge: 'ENGINEERING EXCELLENCE',
      title: 'Defining the Future Through',
      titleAccent: 'Custom Software.',
      subtitle: 'We provide cutting-edge technological solutions spanning Mobile Apps, custom Web Design, specialized SEO, and automated AI Systems.',
      btnStart: 'Get Started',
      btnServices: 'Our Services',
      qualityCommitment: '100% QUALITY COMMITMENT',
    },
    aboutCompact: {
      title: 'The Power of Focused Expertise',
      desc: 'Quang Minh Group is not just a technology provider; we are a strategic partner operated under a lean philosophy. With the mindset of a "one-member tech powerhouse", we maximize engineering quality and eliminate administrative friction to deliver faster, smarter, and more impactful software products.',
    },
    servicesCompact: {
      title: 'Specialized Services',
      subtitle: 'Comprehensive tech solutions built for modern businesses.',
      cards: [
        {
          id: 's_app',
          title: 'Application Development',
          desc: 'Building high-performance native and cross-platform mobile apps (iOS & Android) with flawless interactions.',
          linkText: 'Learn more',
        },
        {
          id: 's_web',
          title: 'Web Design',
          desc: 'High-conversion, UI/UX optimized websites featuring blazing-fast loading speeds.',
          tag: 'LEGACY READY',
          isDark: true,
        },
        {
          id: 's_seo',
          title: 'Specialized SEO',
          desc: 'Secure top search engine rankings through sustainable content and technical SEO architecture.',
        },
        {
          id: 's_ai',
          title: 'AI Chatbots',
          desc: 'Integrate bespoke conversational AI tools to automate customer operations on a 24/7 basis.',
        },
        {
          id: 's_auto',
          title: 'Automation Tools',
          desc: 'Engineered automatic workflows saving businesses hundreds of manual labor hours every month.',
        },
      ],
    },
    whyUsSection: {
      title: 'Why Choose',
      titleAccent: 'Quang Minh Group?',
      description: 'We do not just write code, we build the digital foundation for your long-term success.',
      reasons: [
        {
          id: 'r1',
          title: 'Responsive Turnaround',
          desc: 'Direct-to-expert collaboration loops ensure swift problem-solving without bureaucratic layers.',
        },
        {
          id: 'r2',
          title: 'Masterful Engineering',
          desc: 'Every file and system block is fully optimized for top security standards, easy scale, and peak speeds.',
        },
        {
          id: 'r3',
          title: 'Continuous Innovation',
          desc: 'Constantly deploying modern AI systems and progressive web tech Stack to secure your market advantage.',
        },
      ],
      stats: [
        { value: '99%', label: 'Uptime Guaranteed' },
        { value: '24/7', label: 'Monitoring & Support' },
        { value: '150+', label: 'Projects Delivered' },
        { value: '10x', label: 'Faster Deployment' },
      ],
    },
    servicesPage: {
      badge: 'OUR SERVICES',
      title: 'Breakthrough technology',
      titleAccent: 'solutions',
      titleSuffix: ' for enterprise success.',
      subtitle: 'We blend creative design thinking with deep-domain technical capabilities to develop outstanding digital solutions, optimizing business operations and driving sustainable growth.',
      ctas: {
        title: 'Ready to launch your project?',
        desc: 'Connect with our elite product experts today to retrieve deep consulting and a formal technical blueprint for your ideas.',
        btnContact: 'Consult our expert now',
        btnPricing: 'View service pricing plans',
      },
    },
    projectsPage: {
      badge: 'PROJECT PORTFOLIO',
      title: 'Crafting premium digital',
      titleAccent: 'experiences',
      subtitle: 'Discover how we empower global partners to thrive in digital transformation via progressive architectural design.',
      filterAll: 'All',
      ctaTitle: 'Have a brilliant concept?',
      ctaDesc: 'Let us help you bring it to life using state-of-the-art software systems and creative layout designs.',
      ctaBtn: 'START YOUR PROJECT NOW',
    },
    contactPage: {
      title: 'Start Your Project',
      titleSuffix: 'Today.',
      subtitle: 'Ready to translate your ideas into robust software realities? Leave your contact details; our engineer response SLA is within 24h.',
      emailLabel: 'Email Us',
      phoneLabel: 'Call Us',
      addressLabel: 'Our Office',
      followUs: 'FOLLOW US',
      form: {
        name: 'FULL NAME',
        namePlaceholder: 'John Doe',
        email: 'EMAIL ADDRESS',
        emailPlaceholder: 'example@gmail.com',
        service: 'SERVICE OF INTEREST',
        serviceChoose: 'Choose a service...',
        serviceOptions: [
          'Mobile App Development',
          'Website Design & Custom Frontend',
          'Premium E-Commerce Systems',
          'AI / Chatbot System Integration',
          'Custom Workflow Automation Tools',
        ],
        message: 'DETAILED MESSAGE',
        messagePlaceholder: 'Briefly layout your project scope...',
        btnSubmit: 'Send Request Details',
        success: 'Your request was dispatched successfully! Our product architect will touch base within 24 hours.',
        disclaimer: 'By submitting this request, you agree to our Privacy Terms.',
      },
    },
    footer: {
      about: 'Specialists in customized suite software, automated conversational AI, and technical SEO. We commit to bringing stellar technical outcomes for global ventures.',
      quickLinks: 'Quick Links',
      language: 'Language',
      vietnamese: 'Tiếng Việt',
      english: 'English',
      copyright: '© 2024 Quang Minh Group. Engineering Excellence in Custom Software.',
    },
    quoteEstimator: {
      title: 'Project Cost Estimator',
      subtitle: 'Answer 4 quick questions to receive a preliminary investment quote instantly.',
      step1: '1. What type of project is it?',
      step2: '2. Project Scale & Complexity?',
      step3: '3. What is your ideal timeframe?',
      step4: '4. Your Contact Details',
      prev: 'Previous',
      next: 'Continue',
      submit: 'Calculate Instantly',
      complexity: {
        basic: 'Basic / MVP (Few main screens, clean structure)',
        medium: 'Medium (Core services, complex dashboard integration)',
        advanced: 'Advanced / Enterprise (Heavy load infrastructure, microservices, maximum security)',
      },
      timeline: {
        fast: 'Expedited (Under 1 month)',
        normal: 'Standard (1 - 3 months)',
        flex: 'Flexible (More than 3 months)',
      },
      resultTitle: 'Estimated Budget',
      resultDesc: 'Based on your selected specifications, the initial investment is approximated at:',
      resultCall: 'Email Me the Official Estimation',
    },
  },
};

export const PROJECTS_LIST: Project[] = [
  {
    id: 'p1',
    title: 'Hệ thống quản lý giáo dục - EduNext',
    category: 'Quản lý (SaaS)',
    categoryKey: 'saas',
    description: 'Hệ thống quản lý toàn diện trường học và các trung tâm đào tạo, đồng bộ hóa học sinh, giáo viên, học liệu và thanh toán hóa đơn tự động.',
    image: '/src/assets/images/edu_dashboard_1779681168197.png',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind', 'Docker'],
    specs: 'Management System',
  },
  {
    id: 'p2',
    title: 'App đặt lịch Spa - GlowWell',
    category: 'Ứng dụng di động',
    categoryKey: 'mobile',
    description: 'Ứng dụng di động giúp người dùng tìm kiếm, chọn lịch hẹn, thanh toán và gửi đánh giá khách quan về chất lượng chăm sóc sắc đẹp spa.',
    image: '/src/assets/images/glow_well_1779681185315.png',
    tags: ['React Native', 'Expo', 'FastAPI', 'Redis'],
    specs: 'Mobile Application',
  },
  {
    id: 'p3',
    title: 'Ví điện tử thông minh - ZenPay',
    category: 'Fintech',
    categoryKey: 'fintech',
    description: 'Ứng dụng ví tài chính thế hệ mới với các biểu đồ trực quan, tích hợp AI tư vấn chi tiêu và tối ưu hóa phí giao dịch tức thì.',
    image: '/src/assets/images/zen_pay_1779681203205.png',
    tags: ['iOS/Android', 'Node.js', 'Web3', 'MongoDB'],
    specs: 'Fintech Wallet',
  },
  {
    id: 'p4',
    title: 'Thời trang cao cấp - Aura',
    category: 'E-commerce',
    categoryKey: 'ecommerce',
    description: 'Nền tảng thương mại điện tử chuyên biệt hiển thị các dòng thời trang xa xỉ, đồng hồ cao cấp với tích hợp AR thử đồ ảo.',
    image: '/src/assets/images/aura_ecommerce_1779681226465.png',
    tags: ['React', 'NestJS', 'Stripe API', 'GraphQL'],
    specs: 'E-commerce System',
  },
];

export const CORE_SERVICES: ServiceDetail[] = [
  {
    id: 'ser1',
    num: '01',
    title: 'Thiết kế UI/UX',
    description: 'Chúng tôi tập trung vào trải nghiệm người dùng cuối, tạo ra những giao diện không chỉ đẹp mắt mà còn tối ưu hóa hành trình khách hàng, tăng tỷ lệ chuyển đổi.',
    bullets: [
      'Nghiên cứu người dùng (UX Research)',
      'Thiết kế tương tác (Interaction Design)',
      'Prototyping & Testing',
      'Hệ thống thiết kế (Design Systems)',
    ],
    ctaText: 'Tìm hiểu thêm',
  },
  {
    id: 'ser2',
    num: '02',
    title: 'Phát triển Website',
    description: 'Xây dựng hệ thống Frontend & Backend mạnh mẽ, bảo mật cao và dễ dàng mở rộng theo quy mô doanh nghiệp.',
    bullets: [
      'Frontend: React, Next.js, Vue',
      'Backend: Node.js, NestJS, Go',
      'Cloud: AWS, GCP, Cloudflare',
    ],
    ctaText: 'Tìm hiểu thêm',
    tags: ['React/Next.js', 'Node.js', 'TypeScript'],
    isDark: true,
  },
  {
    id: 'ser3',
    num: '03',
    title: 'Thương mại điện tử',
    description: 'Giải pháp bán hàng trực tuyến toàn diện, từ quản lý kho bãi đến tích hợp thanh toán quốc tế và nội địa.',
    bullets: [
      'Custom Shopify Development',
      'Tích hợp Stripe/MoMo',
    ],
    ctaText: 'Xem giải pháp',
  },
  {
    id: 'ser4',
    num: '04',
    title: 'Bảo trì & Vận hành',
    description: 'Đảm bảo hệ thống luôn hoạt động 24/7 với hiệu suất cao nhất và an toàn tuyệt đối.',
    bullets: [
      'Giám sát hệ thống 24/7/365',
      'Tối ưu hóa tốc độ load & SEO',
      'Sửa lỗi & Phát hành phiên bản mới',
    ],
    ctaText: 'Liên hệ bảo trì',
  },
];

export const QUOTE_PRICE_CONFIG = {
  usdToVnd: 25400,
  basePriceUsd: {
    web: 2200,
    app: 2800,
    ecommerce: 2600,
    ai: 3200,
    automation: 1800,
  },
  complexityMultiplier: {
    basic: 0.6,
    medium: 1,
    advanced: 1.6,
  },
  timelineMultiplier: {
    fast: 1.2,
    normal: 1,
    flex: 0.85,
  },
  range: {
    min: 0.9,
    max: 1.12,
  },
} as const;
=======
export interface Service {
  id: string;
  number: string;
  title: string;
  desc: string;
  bullets: string[];
  tags?: string[];
  icon: string;
  highlight?: boolean;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  desc: string;
  image: string;
  tech?: string[];
}

export const servicesData: Service[] = [
  {
    id: "uiux-design",
    number: "01",
    title: "Thiết kế UI/UX",
    desc: "Chúng tôi tập trung vào trải nghiệm người dùng cuối, tạo ra những giao diện không chỉ đẹp mắt mà còn tối ưu hóa hành trình khách hàng, tăng tỷ lệ chuyển đổi.",
    bullets: [
      "Nghên cứu người dùng (UX Research)",
      "Thiết kế tương tác (Interaction Design)",
      "Prototyping & Testing",
      "Hệ thống thiết kế (Design Systems)"
    ],
    tags: ["Figma", "Adobe XD", "Prototyping"],
    icon: "PenTool", // Sẽ dùng lucide-react PenTool
    image: "https://images.unsplash.com/photo-1541462608141-2ff01dd914e0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "web-dev",
    number: "02",
    title: "Phát triển Website",
    desc: "Xây dựng hệ thống Frontend & Backend mạnh mẽ, bảo mật cao và dễ dàng mở rộng theo quy mô doanh nghiệp. Tối ưu mã nguồn cho tốc độ tải cực nhanh.",
    bullets: [
      "Tối ưu SEO & Tốc độ tải trang",
      "Xây dựng API & Hệ thống cơ sở dữ liệu",
      "Kiến trúc Cloud & Bảo mật đa tầng",
      "Tích hợp CMS tự quản trị nội dung"
    ],
    tags: ["React/Next.js", "Node.js", "Python", "TypeScript"],
    icon: "Code2", // Sẽ dùng lucide-react Code2
    highlight: true
  },
  {
    id: "ecommerce",
    number: "03",
    title: "Thương mại điện tử",
    desc: "Giải pháp bán hàng trực tuyến toàn diện, từ quản lý kho bãi đến tích hợp thanh toán tự động và quản lý kho hàng thông minh, hiệu quả.",
    bullets: [
      "Shopify/WooCommerce Customization",
      "Tích hợp thanh toán (Stripe, MoMo)",
      "Giải pháp Omnichannel",
      "Hệ thống đồng bộ tồn kho tự động"
    ],
    tags: ["E-commerce", "Stripe", "Logistics"],
    icon: "ShoppingCart", // ShoppingCart
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "maintenance",
    number: "04",
    title: "Bảo trì & Vận hành",
    desc: "Đảm bảo hệ thống của bạn luôn hoạt động 24/7 với hiệu suất cao nhất và an toàn tuyệt đối trước mọi nguy cơ tấn công mạng.",
    bullets: [
      "Giám sát uptime & hiệu năng 24/7",
      "Cập nhật bảo mật & backup dữ liệu định kỳ",
      "Sửa lỗi nhanh chóng, SLA cam kết",
      "Tối ưu hóa chi phí máy chủ hạ tầng"
    ],
    tags: ["DevOps", "Cybersecurity", "SLA 99.9%"],
    icon: "Settings", // Settings
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop" // server room
  }
];

export const projectsData: Project[] = [
  {
    id: "omnichannel-retail",
    title: "Nền tảng bán lẻ thông minh Omni-channel",
    category: "ecommerce",
    categoryLabel: "E-COMMERCE SYSTEM",
    desc: "Lập trình hệ thống giao dịch đồng bộ đa kênh tự động hóa luồng hàng cho 100+ đại lý bán lẻ toàn quốc.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop", // Tablet showing dashboard
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS"]
  },
  {
    id: "llm-classifier",
    title: "Hệ thống phân loại văn bản tự động tích hợp LLM",
    category: "fintech",
    categoryLabel: "AI AUTOMATION",
    desc: "Ứng dụng trí tuệ nhân tạo để phân tích, phân loại, bóc tách thông tin và tự động xử lý hồ sơ pháp lý phức tạp.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop", // Glowing circuit
    tech: ["Gemini AI", "Python", "FastAPI", "Vector DB"]
  },
  {
    id: "datacenter-saas",
    title: "Hệ thống quản trị hạ tầng điện toán đám mây SaaS",
    category: "saas",
    categoryLabel: "QUẢN LÝ (SAAS)",
    desc: "Cổng thông tin hiển thị trực quan các lớp ảo hóa dịch vụ máy chủ, tài nguyên của các tập đoàn viễn thông.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop", // Analytics UI on screen
    tech: ["Next.js", "GraphQL", "D3.js", "PostgreSQL"]
  },
  {
    id: "fintech-wallet",
    title: "Ví điện tử liên kết đa ngân hàng thế hệ mới",
    category: "fintech",
    categoryLabel: "FINTECH SOLUTIONS",
    desc: "Ứng dụng di động thanh toán bảo mật tức thời tích hợp công nghệ mã hóa sinh trắc học tiên tiến nhất.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop", // Phone mockup
    tech: ["React Native", "Java", "Spring Boot", "Rust"]
  },
  {
    id: "creative-architecture",
    title: "Cổng kiến trúc và bất động sản cao cấp D66R",
    category: "ecommerce",
    categoryLabel: "CREATIVE WEBSITE",
    desc: "Giao diện website thương mại sang trọng giới thiệu dự án biệt thự sinh thái thông minh, đoạt giải thưởng thiết kế quốc tế.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop", // Architecture home
    tech: ["Vite", "Three.js", "Motion", "Tailwind CSS"]
  },
  {
    id: "medical-care",
    title: "Ứng dụng quản trị y tế và tư vấn bác sĩ từ xa",
    category: "mobile",
    categoryLabel: "ỨNG DỤNG DI ĐỘNG",
    desc: "Tải ứng dụng y tế thông minh đặt lịch hẹn, lưu hồ sơ bệnh án điện tử và tương tác video trực tuyến 24/7.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop", // Medical tablet or phone
    tech: ["React Native", "Firebase", "WebRTC"]
  }
];

export const reasonsData = [
  {
    icon: "ShieldAlert",
    title: "Chất lượng cam kết",
    desc: "Mọi sản phẩm đều trải qua quy trình kiểm thử nghiêm ngặt (Unit test, Integration test và System test) trước khi bàn giao cho khách hàng."
  },
  {
    icon: "Zap",
    title: "Tiến độ thần tốc",
    desc: "Quy trình làm việc Agile chuẩn quốc tế giúp chúng tôi tối ưu hóa thời gian triển khai mà vẫn đảm bảo 100% chất lượng và tính ổn định tối đa."
  },
  {
    icon: "Headphones",
    title: "Hỗ trợ 24/7",
    desc: "Đội ngũ kỹ sư tâm huyết luôn trong tư thế sẵn sàng trực tuyến hỗ trợ, bảo trì vận hành hệ thống một cách tối ưu và nhanh gọn nhất."
  }
];

export const statsData = [
  { value: "99%", label: "Uptime Guaranteed", desc: "Hệ thống vận hành liền mạch" },
  { value: "24/7", label: "Monitoring & Support", desc: "Giám sát thời gian thực chủ động" },
  { value: "150+", label: "Projects Delivered", desc: "Khách hàng tin tưởng ủng hộ" },
  { value: "10x", label: "Faster Deployment", desc: "X6 hiệu suất quy trình Agile" }
];
>>>>>>> 509944af7e68504def08571927813ddb0b4ed4ad
