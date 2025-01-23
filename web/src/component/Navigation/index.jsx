import React, { useState, useEffect } from "react";
import {
  StyledNavbar,
  StyledContainer,
  StyledNav,
  StyledNavLink,
  ApplyButton,
} from "./styles";
import Navbar from "react-bootstrap/Navbar";
import CustomModal from "../Modals";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
    setIsNavOpen(false);
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
    <>
      <StyledNavbar expand="lg" data-bs-theme="light">
        <StyledContainer>
          <Navbar.Brand href="#home" className="me-auto">
            <img src="/Logo.png" width="200px" height="auto" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ justifyContent: "flex-end" }}
            in={isNavOpen}
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
              <ApplyButton onClick={() => setShowModal(true)}>
                지원하기
              </ApplyButton>
            </StyledNav>
          </Navbar.Collapse>
        </StyledContainer>
      </StyledNavbar>

      <CustomModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title="안내"
        imageUrl="/favicon.ico"
        content={
          <>
            <div style={{ fontFamily: "Pretendard-Bold", fontSize: "20px" }}>
              현재 지원 기간이 아닙니다
            </div>
            <p>모집 상세 일정은 홈페이지 하단 Q&A를 참고해주세요.</p>
          </>
        }
      />
    </>
  );
}
