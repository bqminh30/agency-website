import React from "react";
import {
  Container,
  FirstIcon,
  Section,
  ValuesLeftBottomWrapper,
  ValuesLeftHeadline,
  ValuesLeftHeadlineItalic,
  ValuesLeftInput,
  ValuesLeftInputButton,
  ValuesLeftInputContainer,
  ValuesLeftParagraph,
  ValuesLeftParagraphBold,
  ValuesLeftSection,
  ValuesParentWrapper,
  ValuesRightCard,
  ValuesRightCardContainer,
  ValuesRightCardDescription,
  ValuesRightTextContiner,
  ValuesRightIconContiner,
  ValuesRightCardTitle,
  ValuesRightSection,
  PerfectionImage,
  DeadlineImage,
  UpdatedeImage,
  TransparentImage,
} from "./Values.styled";

const Values = () => {
  return (
    <Section id="values">
      <Container>
        <ValuesParentWrapper>

        <ValuesLeftSection>
          <ValuesLeftHeadline><ValuesLeftHeadlineItalic>Gia tri cot loi</ValuesLeftHeadlineItalic>chung toi luon theo duoi</ValuesLeftHeadline>
          <ValuesLeftBottomWrapper>
            <ValuesLeftParagraph><ValuesLeftParagraphBold>Khong bo lo.</ValuesLeftParagraphBold> Chung toi se cap nhat thuong xuyen du an moi nhat va lich san sang ho tro</ValuesLeftParagraph>
            <ValuesLeftInputContainer>
              <ValuesLeftInput placeholder="Email cua ban"/><ValuesLeftInputButton>Theo doi</ValuesLeftInputButton>
            </ValuesLeftInputContainer>
          </ValuesLeftBottomWrapper>
        </ValuesLeftSection>


          {/* =========================== Values Right Section *start============================== */}
          <ValuesRightSection>
            <ValuesRightCardContainer>
              {/* =========================== Values Right Section Cards *start============================== */}

              {/*-------------------------* 1st Card --------------------------*/}
              <ValuesRightCard>
                <ValuesRightIconContiner>
              {/* <FirstIcon/> */}<PerfectionImage src="/images/target-2997217-2516255.png" alt="image"/> 
              </ValuesRightIconContiner>
                <ValuesRightTextContiner>
                <ValuesRightCardTitle>Chi tiet chuan xac</ValuesRightCardTitle>
                <ValuesRightCardDescription>
                Chung toi toi uu tung chi tiet de giao dien hien thi can doi, dung chuan tren moi man hinh
                </ValuesRightCardDescription>
                </ValuesRightTextContiner>
              </ValuesRightCard>

              {/*-------------------------* 2nd Card --------------------------*/}
              <ValuesRightCard>
              <ValuesRightIconContiner>
              {/* <FirstIcon/> */}<DeadlineImage src="/images/task-deadline-4721435-3926023.png" alt="image"/>
              </ValuesRightIconContiner>
                <ValuesRightTextContiner>
                <ValuesRightCardTitle>Dung tien do</ValuesRightCardTitle>
                <ValuesRightCardDescription>
                Tien do duoc cap nhat lien tuc de xu ly van de nhanh va dam bao deadline
                </ValuesRightCardDescription>
                </ValuesRightTextContiner>
              </ValuesRightCard>

              {/*-------------------------* 3rd Card --------------------------*/}
              <ValuesRightCard>
              <ValuesRightIconContiner>
              {/* <FirstIcon/> */}<UpdatedeImage src="/images/design-shape-4119272-3420376.png" alt="image"/>
              </ValuesRightIconContiner>
                <ValuesRightTextContiner>
                <ValuesRightCardTitle>Cap nhat xu huong</ValuesRightCardTitle>
                <ValuesRightCardDescription>
                Doi ngu thiet ke luon cap nhat phong cach moi nhat phu hop voi thuong hieu cua ban
                </ValuesRightCardDescription>
                </ValuesRightTextContiner>
              </ValuesRightCard>

              {/*-------------------------* 4th Card --------------------------*/}
              <ValuesRightCard>
              <ValuesRightIconContiner>
              {/* <FirstIcon/> */}<TransparentImage src="/images/customer-reviews-4861322-4051644.png" alt="image"/>
              </ValuesRightIconContiner>
                <ValuesRightTextContiner>
                <ValuesRightCardTitle>Minh bach</ValuesRightCardTitle>
                <ValuesRightCardDescription>
                Quy trinh ro rang, giao tiep minh bach de cung ban dat muc tieu kinh doanh
                </ValuesRightCardDescription>
                </ValuesRightTextContiner>
              </ValuesRightCard>

              {/* =========================== Values Right Section Cards *end============================== */}
            </ValuesRightCardContainer>
          </ValuesRightSection>
          {/* =========================== Values Right Section *end============================== */}
        </ValuesParentWrapper>
      </Container>
    </Section>
  );
};

export default Values;
