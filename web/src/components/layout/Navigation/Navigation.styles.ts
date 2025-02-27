import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import styled from '@emotion/styled';
import Navbar from 'react-bootstrap/Navbar';
import { colors } from '../../../styles/theme';

export const StyledNavbar = styled(Navbar)`
  background-color: ${colors.background};
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

  @media (max-width: 768px) {
    padding: 16px 0;
    align-items: center;
  }
`;

export const StyledNavLink = styled(Nav.Link)`
  color: darkgray !important;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

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
  background-color: ${colors.primary};
  border-radius: 8px;
  font-family: "Pretendard";
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.button.hover};
  }

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const NavbarToggle = styled(Navbar.Toggle)`
  border: none;
  padding: 0;
  
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
`;
