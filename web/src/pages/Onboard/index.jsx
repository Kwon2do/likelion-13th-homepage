import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import CurriculumComponent from "./Components/Curriculum";
import "./styles/CustomUI.css";
import { aboutUsData } from "../../constants/dummy";
import AboutUsComponent from "../../component/AboutUs/Box-Container";
import ActivityComponent from "./Components/Activity";
import QuestionComponent from "./Components/Question";
import ScheduleComponent from "./Components/Schedule";
import {
  BannerTitle,
  SubTitle,
  Content,
  Wrapper,
  Overlay,
  PageContainer,
  Highlight,
  Button,
  Section,
  ScrollArrow,
  FloatingTopButton,
} from "./styles/Onboard.styles";

export default function Onboard() {
  const [index, setIndex] = useState(0);
  const [showScrollArrow, setShowScrollArrow] = useState(true);
  const [showTopButton, setShowTopButton] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowScrollArrow(scrollTop === 0); // 화살표는 스크롤이 최상단일 때만 표시
    setShowTopButton(scrollTop > 100); // "TOP" 버튼은 스크롤이 일정 이상 내려가면 표시
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
      <Section id="AboutUs">
        <h2>왜 멋쟁이사자처럼과 함께 해야할까요?</h2>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={2000}>
          {aboutUsData.map((item, idx) => (
            <Carousel.Item key={idx}>
              <AboutUsComponent
                imgSrc_props={item.imgSrc}
                Title_props={item.title}
                Content_props={item.content}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Section>
      <Section id="Curriculum">
        <h2>어떤 것들을 배울 수 있을까요?</h2>
        <CurriculumComponent />
      </Section>
      <Section id="Activity">
        <h2>다양한 활동과 배움을 한곳에서!</h2>
        <ActivityComponent />
      </Section>
      <Section id="Question">
        <h2>자주 묻는 질문들</h2>
        <QuestionComponent />
      </Section>
      <Section id="schedule">
        <h2>연간 일정</h2>
        <ScheduleComponent />
      </Section>
      {showTopButton && (
        <FloatingTopButton onClick={scrollToTop}>TOP ↑</FloatingTopButton>
      )}
    </PageContainer>
  );
}
