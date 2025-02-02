import styled from "@emotion/styled";
interface ICurriculumProps {
  title: string;
  content: string;
}
export default function CurriculumInfo({ title, content }: ICurriculumProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 20px 150px;
  text-align: left;
  @media (max-width: 980px) {
    padding: 20px;
  }
`;
const Title = styled.div`
  font-family: "Pretendard-bold";
  font-size: 20px;
  margin-bottom: 5px;
  color: black;
  @media (min-width: 980px) {
    font-size: 24px;
  }
`;

const Content = styled.div`
  font-size: 15px;
  line-height: 2;
  color: #888888;
  @media (min-width: 980px) {
    font-size: 17px;
  }
`;
