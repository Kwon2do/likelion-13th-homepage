import styled from "@emotion/styled";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import InfoTextBox from "../../../component/Curriculum-Text-Box";
import { curriculumData } from "../../../constants/dummy";
export default function Curriculum() {
  return (
    <StyledTabs
      variant="pills"
      defaultActiveKey="기획/디자인"
      id="fill-tab-example"
      className="mb-3 custom-tabs"
      fill
    >
      {curriculumData.map((curriculum) => (
        <Tab
          key={curriculum.eventKey}
          eventKey={curriculum.eventKey}
          title={curriculum.title}
          className="custom-tab"
        >
          <ImgGroup>
            {curriculum.images.map((src, idx) => (
              <CustomImg key={idx} src={src} />
            ))}
          </ImgGroup>
          {curriculum.info.map((info, idx) => (
            <InfoTextBox key={idx} title={info.title} content={info.content} />
          ))}
        </Tab>
      ))}
    </StyledTabs>
  );
}
const StyledTabs = styled(Tabs)`
  padding: 50px 100px 20px 100px;
  @media (max-width: 768px) {
    padding: 20px 0 0 0; /* 모바일 환경에서 패딩 조정 */
  }
`;

const CustomImg = styled.img`
  width: 10%;
  max-width: 300px;
  @media (max-width: 768px) {
    width: 18%;
  }
`;
const ImgGroup = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 100px 0px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;
