import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Carousel from "react-bootstrap/Carousel";
import Curriculum from "./Components/Curriculum";
import "./styles/CustomUI.css";
import { aboutUsData } from "../../constants/dummy";
import AboutUsComponent from "../../component/AboutUs/Box-Container";
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
} from "./styles/Onboard.styles";

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
      <Section id="curriculum">
        <h2>어떤 것들을 배울 수 있을까요?</h2>
        <Curriculum />
      </Section>
    </PageContainer>
  );
}
