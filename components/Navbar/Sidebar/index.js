import getMenuLinks from '../../../data/menuLinks';
import Link from 'next/link';
import {LogoText , CloseIcon, IconContainer, LogoContainer, SidebarContainer, SidebarMenu, SidebarMenuLink, SidebarMenuLinkA, SidebarMenuWrapper } from './Sidebar.styled'
import { useLanguage } from '../../LanguageContext';


const Sidebar = ({ isOpen,toggle}) => {
  const { language } = useLanguage();
  const links = getMenuLinks(language);

  return (
    
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
      {/* <LogoContainer>
        <Link href="/" passHref><a><LogoText>Dawn.</LogoText></a></Link>
      </LogoContainer> */}
        <IconContainer onClick={toggle}>
            <CloseIcon/>
        </IconContainer>
        <SidebarMenuWrapper>
        {links.map((link) => (
        <SidebarMenu key={link.id} onClick={toggle}>
          <li>
        <SidebarMenuLink  href={link.to} >
         <SidebarMenuLinkA role="button"> {link.name}</SidebarMenuLinkA>
        </SidebarMenuLink>
        </li>
        </SidebarMenu>
      ))}
        </SidebarMenuWrapper>
    </SidebarContainer>
   
  )
}

export default Sidebar

