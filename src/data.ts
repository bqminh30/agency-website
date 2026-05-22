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
