import { useState, useRef, useEffect } from "react";
import "./styles/CustomUI.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
import { ApplyModal } from "../../component/Navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../../component/Footer";
gsap.registerPlugin(ScrollTrigger);
export default function Onboard() {
  const [showModal, setShowModal] = useState(false);
  const { scrollToTop, showScrollArrow, showTopButton } = useScroll();
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom+=50vh",
          scrub: true,
        },
      })
      .to(wrapperRef.current, { opacity: 0 })
      .fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1 }, "<");
  }, []);

  return (
    <>
      <PageContainer>
        <Wrapper ref={wrapperRef}>
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
        <div ref={sectionRef}>
          <AllSectionComponent />
        </div>
        {showTopButton && (
          <FloatingTopButton onClick={scrollToTop}>TOP ↑</FloatingTopButton>
        )}
      </PageContainer>
      <ApplyModal setShowModal={setShowModal} showModal={showModal} />
      <Footer />
    </>
  );
}
