import React, { useState } from "react";
import {
  BannerWrapper,
  BannerOverlay,
  BannerContent,
  BannerTitle,
  BannerSubTitle,
  Highlight,
  ScrollArrow,
} from "./Banner.styles";
import Button from "../../../../components/common/Button";
import Modal from "../../../../components/common/Modal";

interface BannerProps {
  showScrollArrow: boolean;
}

const Banner: React.FC<BannerProps> = ({ showScrollArrow }) => {
  const [showModal, setShowModal] = useState(false);

  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
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
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="멋쟁이사자처럼 인천대학교"
      >
        <div style={{ textAlign: "center" }}>
          <img
            src="/favicon.ico"
            alt="멋쟁이사자처럼 아이콘"
            style={{ width: "50px", marginBottom: "16px" }}
          />
          <div
            style={{
              fontFamily: "Pretendard-Bold",
              fontSize: "20px",
              marginBottom: "8px",
            }}
          >
            지금은 지원 기간이 아니에요
          </div>
          <p>모집 일정은 홈페이지 하단 Q&A를 참고해주세요.</p>
        </div>
      </Modal>
    </>
  );
};

export default Banner;
