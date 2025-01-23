import React, { useState, useEffect } from "react";
import {
  StyledNavbar,
  StyledContainer,
  StyledNav,
  StyledNavLink,
  ApplyButton,
} from "./styles";
import Navbar from "react-bootstrap/Navbar";
export default function NavBar() {
  const [activeSection, setActiveSection] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false); // 네비게이션 열림 상태 관리
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop, // 네비게이션 높이만큼 위로 이동
        behavior: "smooth",
      });
    }
    setIsNavOpen(false); // 스크롤 후 네비게이션 닫기
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
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setIsNavOpen(!isNavOpen)} // 토글 상태 변경
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ justifyContent: "flex-end" }}
          in={isNavOpen} // 네비게이션 열림 상태 제어
        >
          <StyledNav>
            <StyledNavLink
              onClick={() => handleScroll("AboutUs")}
              className={activeSection === "AboutUs" ? "active" : ""}
            >
              About Us
            </StyledNavLink>
            <StyledNavLink
              onClick={() => handleScroll("Curriculum")}
              className={activeSection === "Curriculum" ? "active" : ""}
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
