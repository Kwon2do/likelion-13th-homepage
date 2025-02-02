import { QuestionBox } from "../../../component/Question-Box";
import { questionData } from "../../../constants/dummy";
import styled from "@emotion/styled";
export default function QuestionComponent() {
  return (
    <Container>
      {questionData.map((question) => (
        <QuestionBox
          question={question.question}
          answer={question.answer}
          key={question.id}
        />
      ))}
    </Container>
  );
}
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-bottom: 20vh;
`;
