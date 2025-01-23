import { Section } from "../styles/Onboard.styles";
import Carousel from "react-bootstrap/Carousel";
import AboutUsComponent from "../../../component/AboutUs/Box-Container";
import ActivityComponent from "./Activity";
import ScheduleComponent from "./Schedule";
import CurriculumComponent from "./Curriculum";
import { aboutUsData } from "../../../constants/dummy";
import { useState, useEffect } from "react";
export default function AllSectionComponent() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
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
      <Section id="schedule">
        <h2>연간 일정</h2>
        <h2 style={{ color: "darkgray" }}>
          일년 동안 체계적으로 역량을 쌓을 수 있는 커리큘럼이 준비되어 있어요.
        </h2>
        <ScheduleComponent />
      </Section>
    </>
  );
}
