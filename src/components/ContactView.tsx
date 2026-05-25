import { useState, ChangeEvent, FormEvent } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Share2, 
  Code2, 
  ArrowRight,
  CheckCircle2,
  Loader2
} from "lucide-react";

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Vui lòng điền đầy đủ các thông tin bắt buộc.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        const errData = await response.json();
        setErrorMsg(errData.error || "Gửi yêu cầu thất bại. Vui lòng thử lại.");
      }
    } catch (err) {
      setErrorMsg("Kết nối đến máy chủ thất bại. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-bg-light min-h-screen py-16" id="contact-view-container">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h1 className="text-4xl lg:text-5xl font-black text-primary leading-tight">
            Hãy cùng kiến tạo tương lai số.
          </h1>
          <p className="text-base text-primary/70 leading-relaxed max-w-2xl">
            Chúng tôi luôn sẵn sàng lắng nghe những ý tưởng táo bạo và giúp bạn hiện thực hóa chúng thông qua các giải pháp công nghệ tối ưu và toàn diện nhất.
          </p>
        </div>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent-blue/10 text-accent-blue rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-primary mb-1">Email</h3>
                  <p className="text-xs text-primary/70 mb-0.5">contact@devagency.vn</p>
                  <p className="text-xs text-primary/70">support@devagency.vn</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent-blue/10 text-accent-blue rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-primary mb-1">Điện thoại</h3>
                  <p className="text-xs text-primary/70 mb-0.5">+84 (24) 3456 7890</p>
                  <p className="text-xs text-primary/40">Mon - Fri, 9:00 - 18:00</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent-blue/10 text-accent-blue rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-primary mb-1">Địa chỉ</h3>
                  <p className="text-xs text-primary/70 leading-relaxed">
                    Tầng 25, Keangnam Landmark 72, Phạm Hùng, Nam Từ Liêm, Hà Nội
                  </p>
                </div>
              </div>
            </div>

            {/* Socials Tracker */}
            <div className="pt-6 border-t border-primary/5 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary/40">theo dõi chúng tôi</h4>
              <div className="flex space-x-3">
                <a href="#" className="p-2.5 rounded-full border border-primary/10 hover:bg-primary hover:text-white transition-all text-primary">
                  <Globe className="h-4 w-4" />
                </a>
                <a href="#" className="p-2.5 rounded-full border border-primary/10 hover:bg-primary hover:text-white transition-all text-primary">
                  <Share2 className="h-4 w-4" />
                </a>
                <a href="#" className="p-2.5 rounded-full border border-primary/10 hover:bg-primary hover:text-white transition-all text-primary">
                  <Code2 className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Inbuilt Office image mockup beneath contacts */}
            <div className="aspect-[16/10] w-full rounded-xl overflow-hidden shadow border border-primary/5">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                alt="DevAgency HQ Office"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right: Submission Form */}
          <div className="lg:col-span-7 bg-white border border-primary/5 rounded-xl p-8 lg:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="inline-flex p-4 bg-emerald-50 text-emerald-500 rounded-full border border-emerald-100">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary">Yêu cầu đã được gửi!</h3>
                  <p className="text-sm text-primary/70 max-w-md mx-auto">
                    Kính chào quý danh, đội ngũ kỹ sư của DevAgency đã tiếp nhận thông tin dự án. Chúng tôi sẽ phản hồi lại bạn qua địa chỉ email trong vòng tối đa 2 giờ làm việc.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="rounded bg-primary hover:bg-primary-dark text-white px-6 py-2.5 text-xs font-bold transition-all"
                >
                  Gửi yêu cầu mới
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="contact-submission-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary">Họ và tên *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Nguyễn Văn A"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded border border-primary/15 bg-bg-light/40 px-4 py-3 text-sm focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-cyan/25 transition-all text-primary"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary">Địa chỉ Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="example@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded border border-primary/15 bg-bg-light/40 px-4 py-3 text-sm focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-cyan/25 transition-all text-primary"
                    />
                  </div>
                </div>

                {/* Service of Interest */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary">Dịch vụ quan tâm</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded border border-primary/15 bg-bg-light/40 px-4 py-3 text-sm focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-cyan/25 transition-all text-primary"
                  >
                    <option value="">Chọn dịch vụ...</option>
                    <option value="uiux-design">Thiết kế UI/UX</option>
                    <option value="web-dev">Phát triển Website</option>
                    <option value="ecommerce">Thương mại điện tử</option>
                    <option value="maintenance">Bảo trì & Vận hành</option>
                  </select>
                </div>

                {/* Message Text */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary">Nội dung tin nhắn *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Mô tả ngắn gọn dự án hoặc yêu cầu của bạn..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded border border-primary/15 bg-bg-light/40 px-4 py-3 text-sm focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-cyan/25 transition-all text-primary resize-none"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs font-semibold text-rose-500 bg-rose-50 p-3 rounded border border-rose-100">
                    {errorMsg}
                  </p>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded bg-accent-cyan hover:bg-cyan-400 text-black px-6 py-4 text-sm font-bold shadow transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                  id="btn-contact-submit"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-black" />
                      <span>Đang gửi yêu cầu...</span>
                    </>
                  ) : (
                    <>
                      <span>Gửi yêu cầu</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-primary/45 text-center">
                  Bằng cách gửi form này, bạn đồng ý với <a href="#" className="underline">Chính sách bảo mật</a> của chúng tôi.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
