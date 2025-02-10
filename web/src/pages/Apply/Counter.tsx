import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import styled from "@emotion/styled";
import CustomModal from "../../component/Modals";
import { useNavigate } from "react-router-dom"; // useNavigate import

interface CountdownTimerProps {
  deadline: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ deadline }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate(); // navigate hook 사용

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

  // 클릭 이벤트 핸들러: 화면 너비에 따라 다르게 처리
  const handleApplyClick = () => {
    if (window.innerWidth > 900) {
      // PC 버전: 페이지 이동
      navigate("/apply/form");
    } else {
      // 모바일 버전: 모달 표시
      setIsOpen(true);
    }
  };

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
      <ApplyButton onClick={handleApplyClick}>
        13기 아기사자 지원하기
        <ArrowIcon />
      </ApplyButton>
      {isOpen && (
        <CustomModal
          show={isOpen}
          onHide={() => setIsOpen(false)}
          title="LIKELION INU"
          content="지원서 제출은 PC로만 가능합니다."
          primaryColor="black"
        />
      )}
    </TimerWrapper>
  );
};

export default CountdownTimer;

const TimerWrapper = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  @media (max-width: 768px) {
    width: 70vw;
  }
`;

const TitleText = styled.div`
  color: #fba518;
  font-family: "Pretendard-extra-Bold";
  font-size: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Unit = styled.div`
  width: 50px;
  color: darkgray;
  font-size: 24px !important;
`;
const TimeContainer = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  gap: 100px;
  align-items: center;
  font-size: 100px;
  @media (max-width: 768px) {
    width: 40vw;
    font-size: 24px;
    gap: 50px;
  }
`;

const TimeText = styled.div`
  width: 10vw !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard-Bold";
  color: white !important;
  @media (max-width: 768px) {
    width: 40px !important;
  }
`;
const ApplyButton = styled.button`
  width: 50%;
  background: linear-gradient(to right, #e65c00, #f9d423);
  color: white;
  font-size: 20px;
  font-family: "Pretendard-extra-Bold";
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
  @media (max-width: 768px) {
    width: 70vw;
  }
`;

const ArrowIcon = styled(FaArrowRight)`
  position: absolute;
  right: 8px;
  font-size: 24px;
  padding: 0px 10px 0px 0px;
`;
