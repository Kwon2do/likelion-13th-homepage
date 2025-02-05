import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styled from "@emotion/styled";
import { activityData } from "../../../constants/dummy";

interface ICard {
  id: number;
  imgSrc: string;
  title: string;
  text: string;
}

export default function ResponsiveCards() {
  return (
    <Container>
      <h2>다양한 활동과 배움을 한곳에서!</h2>
      <Row>
        {activityData.map((card) => (
          <Col key={card.id} xs={12} md={6} lg={6}>
            <BlurCard card={card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const BlurCard = ({ card }: { card: ICard }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsClicked((prev) => !prev);
  };

  return (
    <CardWrapper>
      <StyledCard onClick={handleClick}>
        <StyledCardImg src={card.imgSrc} isClicked={isClicked} />
        <Overlay isClicked={isClicked}>
          <OverlayTitle>{card.title}</OverlayTitle>
          <CardText>{card.text}</CardText>
        </Overlay>
      </StyledCard>
      <CardTitle>{card.title}</CardTitle>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  gap: 10px;
  margin-bottom: 40px;
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 500px;
  height: auto;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;

const StyledCardImg = styled(Card.Img)<{ isClicked: boolean }>`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
  transition: filter 0.3s ease-in-out;
  filter: ${(props) => (props.isClicked ? "blur(5px)" : "none")};
`;
const Overlay = styled.div<{ isClicked: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  opacity: ${(props) => (props.isClicked ? 1 : 0)};
  visibility: ${(props) => (props.isClicked ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  border-radius: 15px;
`;

const OverlayTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const CardText = styled.p`
  font-size: 16px !important;
  text-align: left;
  padding: 0 40px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 15px;
  color: white;
`;
