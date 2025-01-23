import styled from "@emotion/styled";
export default function CurriculumInfo({ title, content }) {
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
`;
const Title = styled.div`
  font-family: "Pretendard-bold";
  font-size: 20px;
  margin-bottom: 5px;
  color: black;
  @media (min-width: 980px) {
    font-size: 32px;
  }
`;

const Content = styled.div`
  font-size: 15px;
  line-height: 2;
  color: #888888;
  @media (min-width: 980px) {
    font-size: 18px;
  }
`;
