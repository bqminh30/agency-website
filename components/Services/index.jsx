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
          <WhatWeDo>{isVi ? "Chung Toi Lam Gi" : "What We do"}</WhatWeDo>
          <ServiceHeadingDiv>
            <ServiceHeading>{isVi ? "Dich Vu Chung Toi Cung Cap" : "Services We Offer"}</ServiceHeading>
            <Link href='#contact-us'>
             <ContactButton>{isVi ? "Lien He" : "Contact Us"}</ContactButton>
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
                  {isVi ? "Phat Trien Website" : "Web Development"}
                </ServiceTitle>
              
              <ServiceDetails>
              {isVi ? "Xay dung website toi uu de mo rong kinh doanh va tang truong ben vung." : "Get the most out of web development and grow your business."}
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
                  {isVi ? "Phat Trien Ung Dung" : "App Development"}
                </ServiceTitle>
              
              <ServiceDetails>
                {isVi ? "Giai phap phat trien ung dung di dong giup ban tiep can dung nhom khach hang muc tieu." : "Mobile app development solutions that help you reach your target audience."}
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
                <p>{isVi ? "Giai phap digital marketing chien luoc de thuc day tang truong kinh doanh." : "Strategic Digital Marketing Solutions for Business Growth"}</p>   
              </ServiceDetails>
              
            </Service>

          </ServiceList>

        </ServiceContent>

      </Container>
    </Section>
  );
};

export default Services;
