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
  const [activeSection, setActiveSection] = useState<string>("");
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleScroll = (id: string): void => {
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
                onClick={() => handleScroll("aboutus")}
                className={activeSection === "aboutus" ? "active" : ""}
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
                onClick={() => handleScroll("activity")}
                className={activeSection === "activity" ? "active" : ""}
              >
                Activity
              </StyledNavLink>
              <ApplyButton onClick={() => setShowModal(true)}>
                Apply
              </ApplyButton>
            </StyledNav>
          </Navbar.Collapse>
        </StyledContainer>
      </StyledNavbar>
      <ApplyModal setShowModal={setShowModal} showModal={showModal} />
    </>
  );
}
interface ApplyModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}
export const ApplyModal = ({ setShowModal, showModal }: ApplyModalProps) => {
  return (
    <CustomModal
      show={showModal}
      onHide={() => setShowModal(false)}
      title="LikeLion INU"
      imageUrl="/favicon.ico"
      content={
        <>
          <div style={{ fontFamily: "Pretendard-Bold", fontSize: "20px" }}>
            지금은 지원 기간이 아니에요
          </div>
          <p>모집 일정은 홈페이지 하단 Q&A를 참고해주세요.</p>
        </>
      }
    />
  );
};
