import styled from "@emotion/styled";
//import CountdownTimer from "./Counter";
export default function Apply() {
  return (
    <PageWrapper>
      <ApplyBanner src="/applyBanner.png" />
      {/*<CountdownTimer deadline="2025-02-19T23:59:59" />*/}
    </PageWrapper>
  );
}

const ApplyBanner = styled.img`
  width: 70%;
  height: auto;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: black;
`;
