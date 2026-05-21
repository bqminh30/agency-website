import React, { useState } from "react";
import data from "../../data/faqData";
import { useLanguage } from "../LanguageContext";
import {
  Container,
  Faq,
  FaqAnswer,
  FaqHeader,
  FaqHeaderMobile,
  FaqQuestion,
  FaqsSection,
  LeftSection,
  MinusIcon,
  PlusIcon,
  QuestionWrapper,
  Section,
} from "./FAQ.styled";

const FAQ = () => {
  const { language } = useLanguage();
  const isVi = language === "vi";
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <Section>
      <Container>
        <FaqHeader>{isVi ? "Câu Hỏi Thường Gặp" : "Frequently Asked Questions"}</FaqHeader>
        {data.map((item, index) => {
          return (
            <FaqsSection key={item.id}>
              <LeftSection>
                <Faq>
                  <QuestionWrapper role="button" onClick={() => toggle(index)} tabIndex={0}>
                    <FaqQuestion tabIndex={0}>
                      {isVi ? (item.questionVi || item.question) : item.question}
                      {clicked === index ? <MinusIcon aria-label="Collapse FAQ answer"
                aria-expanded="true"/> : <PlusIcon  aria-label="Expand FAQ answer"
                aria-expanded="false"/>}{" "}
                    </FaqQuestion>
                  </QuestionWrapper>
                  {clicked === index ? (
                    <FaqAnswer>{isVi ? (item.answerVi || item.answer) : item.answer}</FaqAnswer>
                  ) : null}
                </Faq>
              </LeftSection>
            </FaqsSection>
          );
        })}
      </Container>
    </Section>
  );
};

export default FAQ;
