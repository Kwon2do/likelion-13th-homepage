import styled from "@emotion/styled";
import CountdownTimer from "./Counter";
import { PageWrapper } from "../../component/styles/Layout";
export default function Apply() {
  return (
    <PageWrapper>
      <ApplyBanner src="/applyBanner.png" />
      <CountdownTimer deadline="2025-02-18" />
    </PageWrapper>
  );
}

const ApplyBanner = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
