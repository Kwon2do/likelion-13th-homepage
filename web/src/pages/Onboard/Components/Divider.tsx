import styled from "@emotion/styled";

const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 200px 0px 60px 0px;
`;

const Line = styled.div`
  width: 80%;
  height: 2px;
  background: linear-gradient(to right, transparent, #ff7710, transparent);
`;

const DividerIcon = styled.div`
  background-color: #ff7710;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: bold;
  position: absolute;
`;

export default function SectionDivider() {
  return (
    <DividerContainer>
      <Line />
      <DividerIcon>Q&A</DividerIcon>
    </DividerContainer>
  );
}
