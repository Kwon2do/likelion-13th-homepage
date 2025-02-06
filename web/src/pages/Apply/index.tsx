import styled from "@emotion/styled";
import CountdownTimer from "./Counter";

export default function Apply() {
  return (
    <PageWrapper>
      <ApplyBanner src="/applyBanner.png" />
      <CountdownTimer deadline="2025-02-18" />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ApplyBanner = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
  margin-top: 150px;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 250px;
  }
`;
