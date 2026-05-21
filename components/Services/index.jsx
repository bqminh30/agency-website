import Link from "next/link";
import { motion } from "framer-motion";
import {
  ServiceContent,
  ServicesText,
  ServiceNavImage,
  ServiceHeading,
  ServiceList,
  ServiceDetails,
  HorizontalLine,
  Span,
  ServiceTitle,
  ServiceLink,
  Service,
  ServiceIndex,
  ServiceDescription,
  Section,
  Container,
  ServiceLinkContainer,
  ServiceTextMainContainer,
  ArrowIcon,
  ServiceImage,
  WhatWeDo,
  ServiceHeader,
  ServiceHeadingDiv,
  ContactButton,
} from "./Services.styled";
import { useLanguage } from "../LanguageContext";

const Services = () => {
  const { language } = useLanguage();
  const isVi = language === "vi";

  return (
    <Section id="services">
      <Container>
        <ServiceHeader>
          <WhatWeDo>{isVi ? "Chúng Tôi Làm Gì" : "What We do"}</WhatWeDo>
          <ServiceHeadingDiv>
            <ServiceHeading>{isVi ? "Dịch Vụ Chúng Tôi Cung Cấp" : "Services We Offer"}</ServiceHeading>
            <Link href='#contact-us'>
             <ContactButton>{isVi ? "Liên Hệ" : "Contact Us"}</ContactButton>
            </Link>
          </ServiceHeadingDiv>
        </ServiceHeader>

        <ServiceContent>
          <ServiceList>

            <Service
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.6,delay:0.5}}
              viewport={{ once: true}}
            >
              <ServiceImage
               alt="Web Development Icon"
                initial={{ opacity: 0 ,x:-130}}
                whileInView={{ opacity: 1,x:0 }}
                transition={{duration:0.7,delay:0.8}}
                viewport={{ once: true}}
                src="/images/website development.svg"></ServiceImage>
           
                <ServiceTitle>
                  {isVi ? "Phát Triển Website" : "Web Development"}
                </ServiceTitle>
              
              <ServiceDetails>
              {isVi ? "Xây dựng website tối ưu để mở rộng kinh doanh và tăng trưởng bền vững." : "Get the most out of web development and grow your business."}
              </ServiceDetails>
              

            </Service>

            <Service
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.6,delay:0.6}}
              viewport={{ once: true}}
            >
              <ServiceImage
              alt="App Development Icon"
                initial={{ opacity: 0 ,x:-130}}
                              whileInView={{ opacity: 1,x:0 }}
                              transition={{duration:0.7,delay:0.8}}
                              viewport={{ once: true}}
                src="/images/app development.svg"></ServiceImage>
              
                <ServiceTitle>
                  {isVi ? "Phát Triển Ứng Dụng" : "App Development"}
                </ServiceTitle>
              
              <ServiceDetails>
                {isVi ? "Giải pháp phát triển ứng dụng di động giúp bạn tiếp cận đúng nhóm khách hàng mục tiêu." : "Mobile app development solutions that help you reach your target audience."}
              </ServiceDetails>             
              
            </Service>

            <Service
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.6,delay:0.7}}
              viewport={{ once: true}}
            >
              <ServiceImage
              alt="Digital Marketing Icon"
                initial={{ opacity: 0 ,x:-130}}
                whileInView={{ opacity: 1,x:0 }}
                transition={{duration:0.7,delay:0.8}}
                viewport={{ once: true}}
                src="/images/digital marketing.svg"></ServiceImage>
              
                <ServiceTitle>
                {isVi ? "Digital Marketing" : "Digital Marketing"}
                </ServiceTitle>
              
              <ServiceDetails>
                <p>{isVi ? "Giải pháp digital marketing chiến lược để thúc đẩy tăng trưởng kinh doanh." : "Strategic Digital Marketing Solutions for Business Growth"}</p>   
              </ServiceDetails>
              
            </Service>

          </ServiceList>

        </ServiceContent>

      </Container>
    </Section>
  );
};

export default Services;
