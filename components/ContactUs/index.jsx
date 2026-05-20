import {
  Section,
  Container,
  Detail,
  DetailIcons,
  DetailDescription,
  DetailTitle,
  LeftSection,
  RightSection,
  Contact,
  ContactDetails,
  MailIcon,
  ContactForm,
  PhoneIcon,
  EmailInput,
  NameInput,
  GetaQuote,
  Form,
  TermsCheckbox,
  SubmitForm,
  CheckboxTitle,
  Checkbox,
  UpperSection,
  BottomSection,
  Dropdowns,
  PhoneInput,
  SocialIcon,
  SocialDiv,
  TitleContact,
} from "./ContactUs.styled";

import { useState } from "react";
import axios from "axios";
import { send } from "emailjs-com";
import Link from "next/link";
import { useLanguage } from "../LanguageContext";

const ContactUs = () => {
  const { language } = useLanguage();
  const isVi = language === "vi";

  const [sender_email, set_sender_email] = useState("");
  const [sender_phone, set_sender_phone] = useState("");
  const [sender_name, set_sender_name] = useState("");
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const hour = newDate.getHours();
  const minute = newDate.getMinutes();
  const [sender_service, set_sender_service] = useState("");
  const [senderDate, setSenderDate] = useState(`${date}-${month}-${year}`);
  const [senderTime, setSenderTime] = useState(`${hour}:${minute}`);
  const [check, setCheck] = useState(false);

  const resetForm = () => {
    set_sender_name("");
    set_sender_email("");
    set_sender_service("");
    set_sender_phone("");
    setSenderDate("");
    setSenderTime("");
    setCheck(false);
  };

  const sendMail = async (e) => {
    e.preventDefault();
    try {
      await send(
        "service_p2zntyf",
        "template_f4vbnzh",
        { sender_name, sender_email, sender_service, senderDate, senderTime },
        "HiwseFxtuDnSuFCo_"
      );
    } catch (err) {
      console.log("Failed", err);
    }
  };

  const sheetSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Name: sender_name,
      Email: sender_email,
      Phone: sender_phone,
      Service: sender_service,
      Date: senderDate,
      Time: senderTime,
    };

    await axios.post(
      "https://sheet.best/api/sheets/69f079ba-8f87-4135-a184-a6709080c738",
      data
    );
  };

  const submit = async (e) => {
    try {
      await Promise.all([sheetSubmit(e), sendMail(e)]);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section id="contact-us">
      <Container>
        <UpperSection>
          <TitleContact>
            {isVi ? "Hãy cùng trao đổi về dự án của bạn" : "Let's Discuss Your Project"}
          </TitleContact>
        </UpperSection>
        <BottomSection>
          <LeftSection>
            <ContactDetails>
              <Contact>
                <DetailIcons>
                  <MailIcon aria-label="Send email" />
                </DetailIcons>
                <Detail>
                  <DetailTitle>Email</DetailTitle>
                  <Link href="mailto:bqminh30@gmail.com" passHref>
                    <a aria-label="Send email to bqminh30@gmail.com">
                      <DetailDescription>bqminh30@gmail.com</DetailDescription>
                    </a>
                  </Link>
                </Detail>
              </Contact>

              <Contact>
                <DetailIcons>
                  <PhoneIcon aria-label="Call phone" />
                </DetailIcons>
                <Detail>
                  <DetailTitle>{isVi ? "Điện thoại" : "Phone"}</DetailTitle>
                  <Link href="tel:0362592858" passHref>
                    <a aria-label="Call 0362592858">
                      <DetailDescription>0362592858</DetailDescription>
                    </a>
                  </Link>
                </Detail>
              </Contact>

              <Contact>
                <DetailIcons>
                  <SocialIcon aria-label="Social links" />
                </DetailIcons>
                <Detail>
                  <DetailTitle>Social</DetailTitle>
                  <SocialDiv>
                    <Link href="https://www.linkedin.com/in/quangminh30/" passHref>
                      <a aria-label="Open LinkedIn" target="_blank" rel="noopener noreferrer">
                        <DetailDescription>LinkedIn</DetailDescription>
                      </a>
                    </Link>
                    <Link href="https://zalo.me/0362592858" passHref>
                      <a aria-label="Open Zalo" target="_blank" rel="noopener noreferrer">
                        <DetailDescription>Zalo</DetailDescription>
                      </a>
                    </Link>
                    <Link href="https://t.me/bqm30" passHref>
                      <a aria-label="Open Telegram" target="_blank" rel="noopener noreferrer">
                        <DetailDescription>Telegram</DetailDescription>
                      </a>
                    </Link>
                    {/* <Link href="https://www.instagram.com/quang_minh30/" passHref>
                      <a aria-label="Open Instagram" target="_blank" rel="noopener noreferrer">
                        <DetailDescription>Instagram</DetailDescription>
                      </a>
                    </Link> */}
                  </SocialDiv>
                </Detail>
              </Contact>
            </ContactDetails>
          </LeftSection>

          <RightSection>
            <Form onSubmit={submit} id="contact-form">
              <GetaQuote>{isVi ? "Nhận báo giá" : "Get a quote"}</GetaQuote>
              <ContactForm>
                <label htmlFor="contact-name">{isVi ? "Xin chào, Tôi là" : "Hey, my name is"}</label>&nbsp;
                <NameInput
                  id="contact-name"
                  type="text"
                  value={sender_name}
                  placeholder={isVi ? " Tên của bạn" : " Your name"}
                  onChange={(e) => set_sender_name(e.target.value)}
                  required
                />

                &nbsp;<label htmlFor="contact-service">{isVi ? "Tôi đang cần ?" : "and I'm looking for"}</label>&nbsp;
                <Dropdowns
                  id="contact-service"
                  value={sender_service}
                  onChange={(e) => set_sender_service(e.target.value)}
                  required
                >
                  <option value="Web Development">{isVi ? "Phát triển website" : "Web Development"}</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="App Development">{isVi ? "Phát triển ứng dụng" : "App Development"}</option>
                </Dropdowns>

                <label htmlFor="contact-email">{isVi ? "Email của bạn" : "Ping us at"}</label>&nbsp;
                <EmailInput
                  id="contact-email"
                  type="email"
                  value={sender_email}
                  placeholder={isVi ? "Địa chỉ email" : " Your email address"}
                  onChange={(e) => set_sender_email(e.target.value)}
                  required
                />

                <label htmlFor="contact-phone">{isVi ? "Số điện thoại" : "Contact number"}</label>&nbsp;
                <PhoneInput
                  id="contact-phone"
                  type="tel"
                  value={sender_phone}
                  placeholder={isVi ? " Số điện thoại của bạn" : " Your phone number"}
                  onChange={(e) => set_sender_phone(e.target.value)}
                  required
                />
              </ContactForm>

              <TermsCheckbox>
                <label style={{ display: "flex", alignItems: "center" }}>
                  <Checkbox
                    type="checkbox"
                    required
                    onChange={(e) => setCheck(e.target.checked)}
                    checked={check}
                  />
                  <CheckboxTitle style={{color: "black"}}> 
                    {isVi
                      ? "Tôi đã đồng ý với tất cả điều kiện và điều khoản"
                      : "I have accepted all the terms and conditions"}
                  </CheckboxTitle>
                </label>
              </TermsCheckbox>

              <SubmitForm type="submit">{isVi ? "Gửi yêu cầu" : "Send Enquiry"}</SubmitForm>
            </Form>
          </RightSection>
        </BottomSection>
      </Container>
    </Section>
  );
};

export default ContactUs;
