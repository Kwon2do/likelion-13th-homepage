import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import styled from "@emotion/styled";

interface CountdownTimerProps {
  deadline: string; // "YYYY-MM-DD HH:mm:ss" 형식
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ deadline }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const targetTime = new Date(deadline).getTime();
    const difference = targetTime - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <TimerWrapper>
      <TitleText>지원서 마감</TitleText>
      <TimeContainer>
        <TimeText>
          {timeLeft.days}
          <Unit>일</Unit>
        </TimeText>
        <TimeText>
          {timeLeft.hours}
          <Unit>시간</Unit>
        </TimeText>
        <TimeText>
          {timeLeft.minutes}
          <Unit>분</Unit>
        </TimeText>
        <TimeText>
          {timeLeft.seconds}
          <Unit>초</Unit>
        </TimeText>
      </TimeContainer>
      <ApplyButton>
        13기 아기사자 지원하기
        <ArrowIcon />
      </ApplyButton>
    </TimerWrapper>
  );
};

export default CountdownTimer;

const TimerWrapper = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  position: absolute;
  bottom: 10vh;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 768px) {
    width: 60vw;
    display: flex;
    bottom: 20vh;
  }
`;

const TitleText = styled.div`
  color: #fba518;
  font-family: "Pretendard-ExtraBold";
  font-size: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Unit = styled.span`
  color: darkgray;
  font-size: 18px;
`;
const TimeContainer = styled.div`
  width: 40vw;
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
  font-size: 100px;
  @media (max-width: 768px) {
    width: 80vw;
    font-size: 24px;
  }
`;

const TimeText = styled.span`
  font-family: "Pretendard-Bold";
  color: white !important;
`;
const ApplyButton = styled.button`
  width: 30%;
  background: linear-gradient(to right, #e65c00, #f9d423);
  color: white;
  font-size: 20px;
  font-family: "Pretendard-ExtraBold";
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: font-size 0.2s ease-in-out;
  &:hover {
    font-size: 18px;
  }
  &:before {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.2s ease-out;
  }
  &:hover:before {
    transform: scale(2);
  }
  &:active {
    transform: scale(0.95);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ArrowIcon = styled(FaArrowRight)`
  position: absolute;
  right: 20px;
  font-size: 20px;
`;
