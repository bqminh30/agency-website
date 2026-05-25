export type Language = 'vi' | 'en';

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryKey: 'saas' | 'ecommerce' | 'mobile' | 'fintech';
  description: string;
  image: string;
  tags: string[];
  specs?: string;
}

export interface ServiceDetail {
  id: string;
  num: string;
  title: string;
  description: string;
  bullets: string[];
  ctaText: string;
  tags?: string[];
  isDark?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}
