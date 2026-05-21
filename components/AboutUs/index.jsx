import {
  AboutTitle,
  About,
  AboutBelow,
  AboutImage,
  AboutContent,
  AboutDescription,
  AboutQuote,
  AboutLink,
  Section,
  Container,
  AboutContentLowerContainer,
  AboutButton,
  AboutImageDiv,
} from "./AboutUs.styled";
import Link from 'next/link'
import { useLanguage } from "../LanguageContext";

const AboutUs = () => {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <Section id="about-us">
      <Container>

          <AboutBelow>
            <AboutImageDiv
            >
              <AboutImage src="/images/about.jpeg" alt="Two female team members discussing project"/>
            </AboutImageDiv>
            <AboutContent>
              <AboutTitle>{isEn ? "About Us" : "Về Chúng Tôi"}</AboutTitle>
              <AboutDescription>
              {isEn
                ? "We focus on building tailored solutions that help your business grow, increase revenue, and improve overall performance. By understanding your specific needs and real-world challenges, Dawn works with you to deliver practical and sustainable business outcomes."
                : `Chúng tôi tập trung phát triển các giải pháp giúp doanh nghiệp của bạn tăng trưởng,
              gia tăng doanh số và tối ưu hiệu quả kinh doanh. Bằng việc hiểu rõ nhu cầu cụ thể,
              phân tích thách thức thực tế và xây dựng giải pháp phù hợp, Dawn đồng hành cùng bạn
              để đạt được các mục tiêu kinh doanh bền vững.`}
              </AboutDescription>
              <Link href='#contact-us'>
                <AboutButton>{isEn ? "Accelerate Your Growth" : "Tăng tốc tăng trưởng"}</AboutButton>
                </Link>
            </AboutContent>
          </AboutBelow>
     
      </Container>
    </Section>
  );
};

export default AboutUs;

