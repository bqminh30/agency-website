import React,{ useState, useEffect } from "react";
import getMenuLinks from "../../../data/menuLinks";
import LogoImage from "/public/images/62375b2bd5c8856bf9e4f5df_Logo.png";
import {
  LanguageSwitcher,
  LanguageToggle,
  Logo,
  LogoText,
  MenuIcon,
  MobileMenu,
  Nav,
  NavContainer,
  NavItem,
  NavLink,
  NavLinkA,
  NavMenu,
} from "./ChildNavbar.styled";
import Link from "next/link";
import { useLanguage } from "../../LanguageContext";


const ChildNavbar = ({ toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);
  const { language, setLanguage } = useLanguage();
  const links = getMenuLinks(language);

  const LogoValue = "text";


  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    
    <Nav  scrollNav={scrollNav} >
      <NavContainer>
        <NavLink href="/">
         <NavLinkA aria-label="Home">{LogoValue === "text" ? <Link href="/"><LogoText>Quang Minh.</LogoText></Link> :<Logo src={LogoImage.src} alt="logo" />}</NavLinkA>
        </NavLink>
        <MobileMenu onClick={toggle}>
          <MenuIcon />
        </MobileMenu>
        <NavMenu>
          {links.map((link) => (
            <NavItem key={link.id}>
              <NavLink href={link.to}>
                <NavLinkA role="button"> {link.name}</NavLinkA>
              </NavLink>
            </NavItem>
          ))}
          <LanguageSwitcher>
            <LanguageToggle type="button" onClick={() => setLanguage("vi")} $active={language === "vi"}>VI</LanguageToggle>
            <LanguageToggle type="button" onClick={() => setLanguage("en")} $active={language === "en"}>EN</LanguageToggle>
          </LanguageSwitcher>
        </NavMenu>
      </NavContainer>
    </Nav>
    
  );
};

export default ChildNavbar;
