import { aboutUsData } from "../../../constants/dummy";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ItemContainer from "../../../component/AboutUs/Box-Container";
const AboutUsComponent = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <h2>왜 멋쟁이사자처럼과 함께 해야할까요?</h2>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={2000}>
        {aboutUsData.map((item, idx) => (
          <Carousel.Item key={idx}>
            <ItemContainer
              imgSrc_props={item.imgSrc}
              Title_props={item.title}
              Content_props={item.content}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
export default AboutUsComponent;
