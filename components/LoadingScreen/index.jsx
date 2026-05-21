import React from "react";
import {
  AccentLine,
  Container,
  Loader,
  Screen,
  SubText,
  Tagline,
  Title,
} from "./LoadingScreen.styled";
import { useLanguage } from "../LanguageContext";

const LoadingScreen = () => {
  const { language } = useLanguage();
  const isVi = language === "vi";

  return (
    <Screen>
      <Container>
        <Title>Quang Minh</Title>
        <AccentLine />
        <Tagline>
          {isVi ? "Đang tải nội dung" : "Đang tải nội dung"}
        </Tagline>
        <SubText>
          {isVi
            ? "Vui lòng chờ trong giây lát để tối ưu trải nghiệm cho bạn."
            : "Vui lòng chờ trong giây lát để tối ưu trải nghiệm cho bạn."}
        </SubText>
        <Loader aria-label="Đang tải" />
      </Container>
    </Screen>
  );
};

export default LoadingScreen;
