import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styled from "@emotion/styled";
import Navbar from "react-bootstrap/Navbar";
export const StyledNavbar = styled(Navbar)`
  background-color: black;
  position: fixed;
  width: 100%;
  z-index: 1000;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;
export const StyledContainer = styled(Container)`
  width: 100%;
`;

export const StyledNav = styled(Nav)`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: flex-end;
`;

export const StyledNavLink = styled(Nav.Link)`
  color: darkgray !important;
  text-decoration: none;
  font-weight: 500;

  &.active {
    font-family: "Pretendard-bold" !important;
    color: white !important;
  }

  &:hover {
    color: white !important;
  }
`;

export const ApplyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  outline: none;
  margin-bottom: 3px;
  padding: 5.5px 12px;
  height: 32px;
  cursor: pointer;
  color: white;
  background-color: #ff7710;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: repeating-linear-gradient(
      45deg,
      rgba(192, 192, 192, 0.3) 0px,
      rgba(192, 192, 192, 0.3) 10px,
      transparent 10px,
      transparent 20px
    );
    animation: stripeMove 1s linear infinite;
    opacity: 0.5;
  }

  @keyframes stripeMove {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;
