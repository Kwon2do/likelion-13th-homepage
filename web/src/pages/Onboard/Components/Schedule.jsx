import React from "react";
import styled from "@emotion/styled";
import { Container } from "react-bootstrap";
import { scheduleEvents } from "../../../constants/dummy";

export default function ScheduleComponent() {
  return (
    <Container>
      <TimelineContainer>
        {scheduleEvents.map((item, index) => (
          <TimelineItem key={item.month} index={index}>
            <TimelineContent>
              <MonthBadge>{item.month}</MonthBadge>
              {item.events.map((event, idx) => (
                <EventWrapper key={idx}>
                  <EventTitle>{event.title}</EventTitle>
                  <EventDescription>{event.description}</EventDescription>
                </EventWrapper>
              ))}
            </TimelineContent>
            <TimelineDot />
          </TimelineItem>
        ))}
      </TimelineContainer>
    </Container>
  );
}

const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 0;

  &::before {
    content: "";
    position: absolute;
    width: 3px;
    height: 100%;
    background: #ff7710;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${({ index }) =>
    index % 2 === 0 ? "flex-start" : "flex-end"};
  margin-bottom: 30px;
  position: relative;
`;

const TimelineContent = styled.div`
  width: 45%;
  background: #f4f4f4;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #ff7710;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  }
`;

const EventWrapper = styled.div`
  text-align: left;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const EventTitle = styled.h5`
  font-size: 24px;
  font-family: "Pretendard-Bold";
  color: #333;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const EventDescription = styled.p`
  font-size: 15px !important;
  font-family: "Pretendard-Regular";
  color: darkgray;
  line-height: 1.6;
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: #ff7710;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  top: 20px;
`;

const MonthBadge = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background: #ff7710;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-weight: bold;
`;
