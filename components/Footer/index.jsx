import Link from 'next/link';
import { CompanyLine, Container, FooterTitles, Section } from './Footer.styled';
import { useLanguage } from '../LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  const isVi = language === 'vi';
  const d = new Date();
  let year = d.getFullYear();

  return (
    <Section>
      <Container>
        <FooterTitles>&copy; {year} {isVi ? 'Ban quyen da duoc bao ho' : 'All Rights Reserved'}</FooterTitles>
        <FooterTitles>
          {isVi ? 'Thiet ke va phat trien boi' : 'Designed And Developed By'}{' '}
          <strong>Quang Minh</strong>
        </FooterTitles>
        <Link href="mailto:bqminh30@gmail.com"><FooterTitles>bqminh30@gmail.com</FooterTitles></Link>
      </Container>
      <CompanyLine>{isVi ? 'Cong Ty TNHH MTV Quang Minh Group' : 'Quang Minh Group One Member Co., Ltd.'}</CompanyLine>
    </Section>
  );
};

export default Footer;
