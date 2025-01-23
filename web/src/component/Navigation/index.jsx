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
