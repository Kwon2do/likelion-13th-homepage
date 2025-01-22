import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useState } from "react";
import InfoComponent from "./Info";
import Dropdown from "react-bootstrap/Dropdown";
import Carousel from "react-bootstrap/Carousel";
import "./Dropdown.css";
const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden; /* 수평 스크롤 방지 */
`;

const Wrapper = styled.section`
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

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-family: "Pretendard-extra-bold";
  font-size: 38px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const SubTitle = styled(motion.p)`
  font-size: 25px;
  font-family: "Pretendard-Bold";
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Button = styled(motion.button)`
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
const Section = styled.section`
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

const Highlight = styled.span`
  color: rgb(255, 119, 16);
`;

export default function Onboard() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <PageContainer>
      <Wrapper>
        <Overlay />
        <Content>
          <Title
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            POSSIBILITY TO REALITY
          </Title>
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
      </Wrapper>
      <Section id="AboutUs">
        <h2>왜 멋쟁이사자처럼과 함께 해야할까요?</h2>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={2000}>
          <Carousel.Item>
            <InfoComponent
              imgSrc_props="/study.jpg"
              Title_props="함께 성장하는 분위기"
              Content_props="멋쟁이사자처럼 인천대학교는 모든 부원이 자신의 역량을 키울 수 있도록 동아리 활동 시작과 함께 파트별 스터디를 결성합니다. 경험이 적은 부원들도 함께 학습하며 성장할 수 있는 환경을 제공합니다."
            />
          </Carousel.Item>
          <Carousel.Item>
            <InfoComponent
              imgSrc_props="/study.jpg"
              Title_props="함께 성장하는 분위기"
              Content_props="멋쟁이사자처럼 인천대학교는 모든 부원이 자신의 역량을 키울 수 있도록 동아리 활동 시작과 함께 파트별 스터디를 결성합니다. 경험이 적은 부원들도 함께 학습하며 성장할 수 있는 환경을 제공합니다."
            />
          </Carousel.Item>
          <Carousel.Item>
            <InfoComponent
              imgSrc_props="/study.jpg"
              Title_props="함께 성장하는 분위기"
              Content_props="멋쟁이사자처럼 인천대학교는 모든 부원이 자신의 역량을 키울 수 있도록 동아리 활동 시작과 함께 파트별 스터디를 결성합니다. 경험이 적은 부원들도 함께 학습하며 성장할 수 있는 환경을 제공합니다."
            />
          </Carousel.Item>
        </Carousel>
      </Section>
      <Section id="curriculum">
        <h2>커리큘럼</h2>
        <p></p>
      </Section>
      <Section bgColor="#f4f4f4" id="Activity">
        <h2>활동</h2>
        <p></p>
      </Section>

      <Section bgColor="#f4f4f4" id="Activity">
        <h2>자주하는 묻는 질문</h2>
        <Dropdown style={{ width: "100%" }}>
          <Dropdown.Toggle id="dropdown-basic">
            멋쟁이사자처럼은 어떤 동아리인가요?
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>멋쟁이사자처럼은 어떤 동아리인가요?</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown style={{ width: "100%" }}>
          <Dropdown.Toggle id="dropdown-basic">
            멋쟁이사자처럼은 어떤 동아리인가요?
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>멋쟁이사자처럼은 어떤 동아리인가요?</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown style={{ width: "100%" }}>
          <Dropdown.Toggle id="dropdown-basic">
            멋쟁이사자처럼은 어떤 동아리인가요?
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>멋쟁이사자처럼은 어떤 동아리인가요?</Dropdown.Item>
          </Dropdown.Menu>
          <Dropdown style={{ width: "100%" }}>
            <Dropdown.Toggle id="dropdown-basic">
              멋쟁이사자처럼은 어떤 동아리인가요?
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>멋쟁이사자처럼은 어떤 동아리인가요?</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown>
      </Section>
    </PageContainer>
  );
}
