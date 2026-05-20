import styled from 'styled-components';

import AboutUs from "../../components/AboutUs"
import ContactUs from "../../components/ContactUs"
import FAQ from "../../components/FAQ"
import Features from "../../components/Features"
import HeroSection from "../../components/HeroSection"
import OurWorks from "../../components/OurWorks"
import Services from "../../components/Services"
import Testimonial from "../../components/Testimonial"
import Testimonials from "../../components/Testimonials"
import TrustedClients from "../../components/TrustedClients"
import Values from "../../components/Values"
import { BsWhatsapp } from 'react-icons/bs';
import { FaFacebookMessenger } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import { useRef } from 'react';
import { motion } from 'framer-motion';


const HomePage = () => {
  const scrollRef = useRef(null) 

  const FloatingButton = styled(motion.div)`
    position: relative;
    background-color: ${({ $brand }) => $brand || "#25d366"};
    color: #fff;
    padding: 10px 14px;
    border-radius: 50%;
    display: grid;
    place-items:center;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    &:hover {
      box-shadow: 0 10px 8px rgba(0, 0, 0, 0.2);
    }
  `;

  const FloatingButtonIcon = styled.span`
    font-size: 30px;
  `;

  const FloatingButtonStack = styled.div`
    position: fixed;
    right: 30px;
    bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 99;
  `;

  return (
    <>
      <HeroSection id="main-content"/>
      <AboutUs ref={scrollRef} />
      <Services />
      <OurWorks />
      <Features />
      <Testimonial />
      <FAQ />
      <ContactUs />
      <FloatingButtonStack>
        <a target='_blank' href="https://wa.me/84362592858" aria-label="Nhan tin qua WhatsApp">
          <FloatingButton $brand="#25D366" initial={{ opacity: 0 , y:25}} whileInView={{ opacity: 1, y:0 }}>
            <FloatingButtonIcon><BsWhatsapp /></FloatingButtonIcon>
          </FloatingButton>
        </a>
        <a target='_blank' href="https://zalo.me/0362592858" aria-label="Nhan tin qua Zalo">
          <FloatingButton $brand="#0068FF" initial={{ opacity: 0 , y:25}} whileInView={{ opacity: 1, y:0 }}>
            <FloatingButtonIcon><SiZalo /></FloatingButtonIcon>
          </FloatingButton>
        </a>
        <a target='_blank' href="https://www.facebook.com/buiquangminh30" aria-label="Nhan tin qua Facebook">
          <FloatingButton $brand="#0084FF" initial={{ opacity: 0 , y:25}} whileInView={{ opacity: 1, y:0 }}>
            <FloatingButtonIcon><FaFacebookMessenger /></FloatingButtonIcon>
          </FloatingButton>
        </a>
      </FloatingButtonStack>

    </>
  )
}

export default HomePage
