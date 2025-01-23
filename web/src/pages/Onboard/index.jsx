import { useState, useEffect } from "react";
import CurriculumComponent from "./Components/Curriculum";
import "./styles/CustomUI.css";
import { aboutUsData } from "../../constants/dummy";
import SectionDivider from "./Components/Divider";
import CustomModal from "../../component/Modals";
import {
  BannerTitle,
  SubTitle,
  Content,
  Wrapper,
  Overlay,
  PageContainer,
  Highlight,
  Button,
  ScrollArrow,
  FloatingTopButton,
} from "./styles/Onboard.styles";
import { useScroll } from "../../hooks/useScroll";
import AllSectionComponent from "./Components/Section";
import QuestionComponent from "./Components/Question";
export default function Onboard() {
  const [showModal, setShowModal] = useState(false);
  const { scrollToTop, showScrollArrow, showTopButton } = useScroll();
  return (
    <>
      <PageContainer>
        <Wrapper>
          <Overlay />
          <Content>
            <BannerTitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              POSSIBILITY TO REALITY
            </BannerTitle>
            <SubTitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Highlight>멋쟁이사자처럼 인천대학교</Highlight>와 함께
              <br />
              그동안 꿈꿔온 아이디어를 현실로 만들어 보세요!
            </SubTitle>
            <Button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, duration: 0.8, ease: "easeInOut" }}
              onClick={() => setShowModal(true)}
            >
              13기 아기사자 지원하기
            </Button>
          </Content>
          {showScrollArrow && (
            <ScrollArrow
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
            >
              ↓
            </ScrollArrow>
          )}
        </Wrapper>
        <AllSectionComponent />
        <SectionDivider />
        <QuestionComponent />
        {showTopButton && (
          <FloatingTopButton onClick={scrollToTop}>TOP ↑</FloatingTopButton>
        )}
      </PageContainer>
      <CustomModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title="안내"
        imageUrl="/favicon.ico"
        content={
          <>
            <h4>현재 지원 기간이 아닙니다</h4>
            <p>다음 기수 모집 일정은 추후 공지될 예정입니다.</p>
          </>
        }
      />
    </>
  );
}
