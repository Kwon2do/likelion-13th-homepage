import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { colors } from '../../../../styles/theme';

export const BannerWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('/onboard.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

export const BannerContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BannerTitle = styled(motion.h1)`
  font-family: 'Pretendard-extra-bold';
  font-size: 50px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const BannerSubTitle = styled(motion.p)`
  font-size: 25px;
  font-family: 'Pretendard';
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Highlight = styled.span`
  color: ${colors.primary};
  font-family: 'Pretendard-bold';
`;

export const ScrollArrow = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
  cursor: pointer;
  animation: bounce 2s infinite;
  z-index: 2;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) translateX(-50%);
    }
    40% {
      transform: translateY(-20px) translateX(-50%);
    }
    60% {
      transform: translateY(-10px) translateX(-50%);
    }
  }
`;
