import styled from "@emotion/styled";
import { motion } from "framer-motion";
export const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  background-color: black;
`;

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("/onboard.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
`;

export const BannerTitle = styled(motion.h1)`
  font-family: "Pretendard-Extrabold";
  font-size: 50px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const SubTitle = styled(motion.p)`
  font-size: 25px;
  font-family: "Pretendard";
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Button = styled(motion.button)`
  padding: 15px 20px;
  font-family: "Pretendard-Bold";
  background-color: rgb(255, 119, 16);
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
export const Section = styled.section`
  width: 100%;
  min-height: 80vh;
  padding: 150px 0px 0px 0px;
  transition: all 0.3s ease;
  h1 {
    font-family: "Pretendard-Bold";
    font-size: 32px;
    margin-bottom: 20px;
    text-align: center;
    color: rgb(255, 119, 16);
    @media (max-width: 768px) {
      font-size: clamp(18px, 32px, 32px) !important;
    }
  }
  h2 {
    font-family: "Pretendard-Bold";
    font-size: 32px;
    margin-bottom: 20px;
    text-align: center;
    color: rgb(255, 119, 16);
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
  p {
    font-size: 20px;
    line-height: 1.6;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const Highlight = styled.span`
  color: rgb(255, 119, 16);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  border: none;
`;

export const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 350px;
  border-radius: 20px;
  padding: 15px 30px;
  border: none;
  transition: all 0.2s ease;
  background-color: transparent !important;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px) !important;
  transform: scale(1.05) translateZ(0px);
  width: 80%;
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 5px;
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: auto;
  img {
    border-radius: 1rem;
    object-fit: cover;
    width: 100%;
    height: 260px;
    @media (max-width: 768px) {
      width: 100%;
    }
    @media (min-width: 768px) {
      width: 300px;
    }
  }
  @media (min-width: 768px) {
    width: 40%;
  }
`;
export const Title = styled.p`
  font-size: 18px !important;
  font-family: "Pretendard-Bold";
  color: white;
  margin-bottom: 1.75rem;
  text-align: center;
  @media (min-width: 992px) {
    font-size: 32px !important;
    text-align: left;
  }
`;

export const Description = styled.p`
  font-size: 15px !important;
  line-height: 1.5;
  color: #888;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    font-size: 15px !important;
  }

  transition: all 0.3s ease;
`;
export const ResponsiveContainer = styled.div`
  padding: 30px;
  height: 300px;
  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const ScrollArrow = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 72px;
  font-weight: bold;
  animation: bounce 1.5s infinite;
  cursor: pointer;
  color: white;
  z-index: 1;
  @keyframes bounce {
    0%,
    100% {
      transform: translate(-50%, 0);
    }
    50% {
      transform: translate(-50%, -10px);
    }
  }
`;

export const FloatingTopButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ff7710;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease, transform 0.3s ease;
  animation: float 3s ease-in-out infinite;

  &:hover {
    transform: scale(1.1);
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
