import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styled from "@emotion/styled";
import { activityData } from "../../../constants/dummy";
export default function ResponsiveCards() {
  return (
    <Container>
      <Row>
        {activityData.map((card) => (
          <Col key={card.id} xs={12} md={6} lg={6}>
            <StyledCard>
              <StyledCardImg variant="top" src={card.imgSrc} />
              <StyledCardBody>
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.text}</CardText>
              </StyledCardBody>
            </StyledCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const StyledCard = styled(Card)`
  width: 100%;
  height: 400px;
  border: none;
  @media (min-width: 768px) {
    height: 450px;
  }
  @media (max-width: 768px) {
    padding: 20px;
  }
  @media (min-width: 1200px) {
    height: 450px;
  }
`;
const StyledCardImg = styled(Card.Img)`
  height: 60%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); /* 그림자 효과 */
  @media (max-width: 767px) {
    height: 70%;
  }
`;

const StyledCardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  height: auto;
`;

const CardTitle = styled(Card.Title)`
  font-size: 20px !important;
  font-family: "Pretendard-Bold";
  text-align: center;
`;

const CardText = styled(Card.Text)`
  font-size: 15px !important;
  font-family: "Pretendard-Regular";
  text-align: left;
  color: #333333;

  @media (max-width: 767px) {
    font-size: 12px !important;
  }
`;
