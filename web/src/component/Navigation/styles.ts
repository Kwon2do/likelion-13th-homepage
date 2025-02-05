import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styled from "@emotion/styled";
import Navbar from "react-bootstrap/Navbar";
export const StyledNavbar = styled(Navbar)`
  background-color: transparent;
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
  color: darkgray;
  text-decoration: none;
  font-weight: 500;

  &.active {
    font-family: "Pretendard-bold" !important;
    color: white !important;
  }

  &:hover {
    color: white;
  }
`;

export const ApplyButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  outline: none;
  margin-bottom: 3px;
  padding: 5.5px 12px;
  height: 32px;
  cursor: pointer;
  color: black;
  background-color: white;
  border-radius: 4px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  opacity: 0.5;
  /* linear-gradient 배경 설정 */
  background-image: linear-gradient(to right, darkgray, #ff7710);
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 0% 100%;
  transition: background-size 0.1s ease, color 0.1s ease;
  &:hover {
    background-size: 100% 100%;
    background-color: white;
  }
`;
