import styled from "@emotion/styled";
export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
