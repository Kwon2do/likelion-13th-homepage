import styled from "@emotion/styled";
import { motion } from "framer-motion";
export const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden; /* 수평 스크롤 방지 */
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
  font-family: "Pretendard-extra-bold";
  font-size: 38px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const SubTitle = styled(motion.p)`
  font-size: 25px;
  font-family: "Pretendard-Bold";
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
  padding: 150px 0px 20px 0px;
  transition: all 0.3s ease;

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
  background-color: #333333 !important;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px) !important;
  transform: scale(1.05) translateZ(0px);
  &:hover {
    transform: scale(1.1);
  }
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
  font-size: 22px !important;
  font-family: "Pretendard-Bold";
  color: white;
  margin-bottom: 1.75rem;
  text-align: center;
  @media (min-width: 992px) {
    font-size: 32px !important;
  }
`;

export const Description = styled.p`
  font-size: 15px !important;
  line-height: 1.5;
  color: #888;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    font-size: 17px !important;
  }

  transition: all 0.3s ease;
`;
export const ResponsiveContainer = styled.div`
  padding: 30px;
  height: 300px;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const ScrollArrow = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 50px;
  font-weight: bold;
  animation: bounce 1.5s infinite;
  cursor: pointer;
  color: white;
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
  &:hover {
    transform: scale(1.1);
  }
`;
