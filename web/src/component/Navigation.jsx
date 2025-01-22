import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "@emotion/styled";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("");
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, // 네비게이션 높이만큼 위로 이동
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-70px 0px 0px 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <StyledNavbar expand="lg" data-bs-theme="light">
      <StyledContainer>
        <Navbar.Brand href="#home" className="me-auto">
          <img src="/Logo.png" width="200px" height="auto" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ justifyContent: "flex-end" }}
        >
          <StyledNav>
            <StyledNavLink
              onClick={() => handleScroll("AboutUs")}
              className={activeSection === "AboutUs" ? "active" : ""}
            >
              About Us
            </StyledNavLink>
            <StyledNavLink
              onClick={() => handleScroll("curriculum")}
              className={activeSection === "curriculum" ? "active" : ""}
            >
              Curriculum
            </StyledNavLink>
            <StyledNavLink
              onClick={() => handleScroll("Activity")}
              className={activeSection === "Activity" ? "active" : ""}
            >
              Activity
            </StyledNavLink>
            <ApplyButton href="/apply">지원하기</ApplyButton>
          </StyledNav>
        </Navbar.Collapse>
      </StyledContainer>
    </StyledNavbar>
  );
}

/* Styled Components */
const StyledNavbar = styled(Navbar)`
  background-color: white;
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

const StyledContainer = styled(Container)`
  width: 100%;
`;

const StyledNav = styled(Nav)`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: flex-end;
`;

const StyledNavLink = styled(Nav.Link)`
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

const ApplyButton = styled.div`
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
