import React from 'react'
import { BeginButton, Container, Left, LeftCaption, LeftDescription, LeftHeader, LeftHeading, LeftImg, Numbers, Right, RightParagraph, RightSections, Section } from './Features.styled'
import Link from 'next/link'
import { useLanguage } from '../LanguageContext'

function Features() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <Section>
      <Container>
        <Left>
          <LeftHeader>
            <LeftCaption>{isEn ? 'Why choose us' : 'Tại sao chọn chúng tôi'}</LeftCaption>
            <LeftHeading style={{ color: '#000' }}>{isEn ? 'Still unsure?' : 'Bạn vẫn còn phân vân?'}</LeftHeading>
            <LeftDescription>{isEn ? 'Here are 3 reasons you should partner with us!' : 'Có 3 lý do bạn có thể tin tưởng!'}</LeftDescription>
          </LeftHeader>
        </Left>

        <LeftImg>
          <Link href="#contact-form" passHref><BeginButton>{isEn ? "Let's begin" : 'Bắt đầu ngay'}</BeginButton></Link>
        </LeftImg>

        <Right>
          <RightSections>
            <Numbers>
              <h2 style={{color: '#333'}}>100%</h2>
              <p style={{color: '#333'}}>{isEn ? 'Happy clients' : 'Khách hàng hài lòng'}</p>
            </Numbers>
            <RightParagraph>
              {isEn
                ? 'We are proud to maintain a 100% client satisfaction rate.'
                : 'Chúng tôi tự hào duy trì tỷ lệ hài lòng của khách hàng 100%.'}
            </RightParagraph>
          </RightSections>

          <RightSections>
            <Numbers>
              <h2 style={{color: '#333'}}>78%</h2>
              <p style={{color: '#333'}}>{isEn ? 'Increase in leads' : 'Tăng lượng khách hàng tiềm năng'}</p>
            </Numbers>
            <RightParagraph>
              {isEn
                ? 'Our clients see an average 78% lead growth after 6 months of collaboration.'
                : 'Khách hàng của chúng tôi nhận thấy mức tăng trưởng khách hàng tiềm năng trung bình là 78% sau 6 tháng hợp tác.'}
            </RightParagraph>
          </RightSections>

          <RightSections>
            <Numbers>
              <h2 style={{color: '#333'}}>3x</h2>
              <p style={{color: '#333'}}>{isEn ? 'Client growth' : 'Tăng trưởng khách hàng'}</p>
            </Numbers>
            <RightParagraph>
              {isEn
                ? 'Clients report an average 3x growth in traffic, leads, and sales.'
                : 'Khách hàng báo cáo mức tăng trưởng trung bình gấp 3 lần về lưu lượng truy cập, khách hàng tiềm năng và doanh số bán hàng.'}
            </RightParagraph>
          </RightSections>
        </Right>
      </Container>
    </Section>
  )
}

export default Features
