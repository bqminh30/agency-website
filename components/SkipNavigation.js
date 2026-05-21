// SkipNavigation.js
import React from 'react';
import styled from 'styled-components';
import { useLanguage } from './LanguageContext';

const SkipLink = styled.a`
  position: absolute;
  left: -9999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;

  &:focus {
    position: static;
    width: auto;
    height: auto;
    overflow: visible;
  }
`;

const SkipNavigation = () => {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  return (
    <>
      <SkipLink href="#main-content" className="skip-link">
        {isVi ? 'Chuyển đến nội dung chính' : 'Skip to Main Content'}
      </SkipLink>
      <SkipLink href="#main-menu" className="skip-link">
        {isVi ? 'Chuyển đến menu chính' : 'Skip to Main Menu'}
      </SkipLink>
      <SkipLink href="#footer" className="skip-link">
        {isVi ? 'Chuyển đến chân trang' : 'Skip to Footer'}
      </SkipLink>
    </>
  );
};

export default SkipNavigation;