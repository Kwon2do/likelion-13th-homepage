import { useState, useCallback } from "react";
import Collapse from "react-bootstrap/Collapse";
import styled from "@emotion/styled";
interface IQuestionBoxProps {
  question: string;
  answer: string;
}
export const QuestionBox = ({ question, answer }: IQuestionBoxProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  return (
    <StyledContainer>
      <StyledButton
        isOpen={open}
        onClick={toggleOpen}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <span>Q</span>
        {question}
        <Icon isOpen={open}>➤</Icon>
      </StyledButton>
      <Collapse in={open} timeout={150}>
        <StyledCollapse id="example-collapse-text">
          <AnswerPrefix>A</AnswerPrefix>
          <span dangerouslySetInnerHTML={{ __html: answer }} />
        </StyledCollapse>
      </Collapse>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledButton = styled.button`
  width: 60%;
  height: 60px;
  background-color: ${({ isOpen }: { isOpen: boolean }) =>
    isOpen ? "#ff7710" : "black"};
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  font-family: "Pretendard-Bold";
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ isOpen }) => (isOpen ? "#ff8c3a" : "#333")};
  }

  &:active {
    transform: scale(0.98);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledCollapse = styled.div`
  width: 60%;
  background-color: #f4f4f4;
  color: black;
  font-size: 14px;
  font-family: "Pretendard-Regular";
  padding: 15px 20px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 100%;
  }
  line-height: 2;
`;

const AnswerPrefix = styled.span`
  font-weight: bold;
  margin-right: 8px;
  color: #ff7710;
`;

const Icon = styled.span`
  font-size: 20px;
  transform: ${({ isOpen }: { isOpen: boolean }) =>
    isOpen ? "rotate(-90deg)" : "rotate(90deg)"};
  transition: transform 0.3s ease;
`;
