import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Screen = styled.div`
  position: relative;
  width: 100%;
  min-height: 100svh;
  display: grid;
  place-items: center;
  overflow: hidden;
  background:
    radial-gradient(circle at 15% 20%, rgba(135, 160, 255, 0.18) 0, rgba(135, 160, 255, 0) 22%),
    radial-gradient(circle at 82% 18%, rgba(109, 124, 255, 0.14) 0, rgba(109, 124, 255, 0) 18%),
    radial-gradient(circle at 50% 100%, rgba(180, 198, 255, 0.3) 0, rgba(180, 198, 255, 0) 28%),
    linear-gradient(180deg, #f8faff 0%, #edf2ff 52%, #e7eeff 100%);

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: auto;
    pointer-events: none;
  }

  &::before {
    width: 420px;
    height: 420px;
    top: -120px;
    left: -120px;
    border-radius: 50%;
    background:
      radial-gradient(circle at center, rgba(255, 255, 255, 0.65) 0, rgba(255, 255, 255, 0) 62%);
    filter: blur(10px);
  }

  &::after {
    right: -80px;
    bottom: -90px;
    width: 320px;
    height: 320px;
    border-radius: 38% 62% 57% 43% / 42% 41% 59% 58%;
    background: linear-gradient(135deg, rgba(150, 170, 255, 0.18), rgba(109, 124, 255, 0.08));
    filter: blur(2px);
  }
`;

export const Container = styled.div`
  width: min(92%, 460px);
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  border-radius: 28px;
  border: 1px solid rgba(99, 102, 241, 0.08);
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 18px 40px rgba(99, 102, 241, 0.12);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  animation: ${fadeIn} 0.45s ease-out;
`;

export const Title = styled.h1`
  margin: 0;
  color: #1f2a44;
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: clamp(2.4rem, 8vw, 4.2rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.02em;
`;

export const Tagline = styled.h3`
  margin: 0;
  color: #3f4c6b;
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: clamp(1rem, 2.8vw, 1.25rem);
  font-weight: 500;
  line-height: 1.6;
`;

export const AccentLine = styled.span`
  width: 64px;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, #6d7cff 0%, #8ea2ff 100%);
`;

export const SubText = styled.p`
  margin: 0;
  color: #667085;
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
`;

export const Loader = styled.span`
  width: 42px;
  height: 42px;
  margin-top: 0.35rem;
  border-radius: 50%;
  border: 3px solid rgba(109, 124, 255, 0.18);
  border-top-color: #6d7cff;
  animation: ${spin} 0.9s linear infinite;
`;
