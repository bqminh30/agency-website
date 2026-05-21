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
          <ValuesLeftHeadline><ValuesLeftHeadlineItalic>Giá trị cốt lõi</ValuesLeftHeadlineItalic>chúng tôi luôn theo đuổi</ValuesLeftHeadline>
          <ValuesLeftBottomWrapper>
            <ValuesLeftParagraph><ValuesLeftParagraphBold>Không bỏ lỡ.</ValuesLeftParagraphBold> Chúng tôi sẽ cập nhật thường xuyên dự án mới nhất và lịch sẵn sàng hỗ trợ</ValuesLeftParagraph>
            <ValuesLeftInputContainer>
              <ValuesLeftInput placeholder="Email của bạn"/><ValuesLeftInputButton>Theo dõi</ValuesLeftInputButton>
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
                <ValuesRightCardTitle>Chi tiết chuẩn xác</ValuesRightCardTitle>
                <ValuesRightCardDescription>
                Chúng tôi tối ưu từng chi tiết để giao diện hiển thị cân đối, đúng chuẩn trên mọi màn hình
                </ValuesRightCardDescription>
                </ValuesRightTextContiner>
              </ValuesRightCard>

              {/*-------------------------* 2nd Card --------------------------*/}
              <ValuesRightCard>
              <ValuesRightIconContiner>
              {/* <FirstIcon/> */}<DeadlineImage src="/images/task-deadline-4721435-3926023.png" alt="image"/>
              </ValuesRightIconContiner>
                <ValuesRightTextContiner>
                <ValuesRightCardTitle>Đúng tiến độ</ValuesRightCardTitle>
                <ValuesRightCardDescription>
                Tiến độ được cập nhật liên tục để xử lý vấn đề nhanh và đảm bảo deadline
                </ValuesRightCardDescription>
                </ValuesRightTextContiner>
              </ValuesRightCard>

              {/*-------------------------* 3rd Card --------------------------*/}
              <ValuesRightCard>
              <ValuesRightIconContiner>
              {/* <FirstIcon/> */}<UpdatedeImage src="/images/design-shape-4119272-3420376.png" alt="image"/>
              </ValuesRightIconContiner>
                <ValuesRightTextContiner>
                <ValuesRightCardTitle>Cập nhật xu hướng</ValuesRightCardTitle>
                <ValuesRightCardDescription>
                Đội ngũ thiết kế luôn cập nhật phong cách mới nhất phù hợp với thương hiệu của bạn
                </ValuesRightCardDescription>
                </ValuesRightTextContiner>
              </ValuesRightCard>

              {/*-------------------------* 4th Card --------------------------*/}
              <ValuesRightCard>
              <ValuesRightIconContiner>
              {/* <FirstIcon/> */}<TransparentImage src="/images/customer-reviews-4861322-4051644.png" alt="image"/>
              </ValuesRightIconContiner>
                <ValuesRightTextContiner>
                <ValuesRightCardTitle>Minh bạch</ValuesRightCardTitle>
                <ValuesRightCardDescription>
                Quy trình rõ ràng, giao tiếp minh bạch để cùng bạn đạt mục tiêu kinh doanh
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
