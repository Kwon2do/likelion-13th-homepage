import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BannerWrapper,
  BannerOverlay,
  BannerContent,
  BannerTitle,
  BannerSubTitle,
  Highlight,
  ScrollArrow
} from './Banner.styles';
import Button from '../../../../components/common/Button';
import { ApplyModal } from '../../../../components/layout/Navigation/Navigation';

interface BannerProps {
  showScrollArrow: boolean;
}

const Banner: React.FC<BannerProps> = ({ showScrollArrow }) => {
  const [showModal, setShowModal] = useState(false);

  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <>
      <BannerWrapper>
        <BannerOverlay />
        <BannerContent>
          <BannerTitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            POSSIBILITY TO REALITY
          </BannerTitle>
          <BannerSubTitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Highlight>멋쟁이사자처럼 인천대학교</Highlight>와 함께
            <br />
            그동안 꿈꿔온 아이디어를 현실로 만들어 보세요!
          </BannerSubTitle>
          <Button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.8, ease: "easeInOut" }}
            onClick={() => setShowModal(true)}
            size="large"
          >
            13기 아기사자 지원하기
          </Button>
        </BannerContent>
        {showScrollArrow && (
          <ScrollArrow onClick={handleScrollDown}>↓</ScrollArrow>
        )}
      </BannerWrapper>
      <ApplyModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Banner;
