import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styled from "@emotion/styled";
import Navbar from "react-bootstrap/Navbar";
export const StyledNavbar = styled(Navbar)`
  background-color: white;
  position: fixed;
  width: 100%;
  z-index: 1000;
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
  color: black;
  text-decoration: none;
  font-weight: 500;

  &.active {
    font-family: "Pretendard-bold" !important;
    color: rgb(255, 119, 16) !important;
  }

  &:hover {
    color: rgb(255, 119, 16);
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
  color: rgb(255, 255, 255);
  background-color: rgb(255, 119, 16);
  border-radius: 4px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    opacity: 0.7;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;
