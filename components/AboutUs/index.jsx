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
              <AboutTitle>{isEn ? "About Us" : "Ve Chung Toi"}</AboutTitle>
              <AboutDescription>
              {isEn
                ? "We focus on building tailored solutions that help your business grow, increase revenue, and improve overall performance. By understanding your specific needs and real-world challenges, Dawn works with you to deliver practical and sustainable business outcomes."
                : `Chung toi tap trung phat trien cac giai phap giup doanh nghiep cua ban tang truong,
              gia tang doanh so va toi uu hieu qua kinh doanh. Bang viec hieu ro nhu cau cu the,
              phan tich thach thuc thuc te va xay dung giai phap phu hop, Dawn dong hanh cung ban
              de dat duoc cac muc tieu kinh doanh ben vung.`}
              </AboutDescription>
              <Link href='#contact-us'>
                <AboutButton>{isEn ? "Accelerate Your Growth" : "Tang toc tang truong"}</AboutButton>
                </Link>
            </AboutContent>
          </AboutBelow>
     
      </Container>
    </Section>
  );
};

export default AboutUs;

