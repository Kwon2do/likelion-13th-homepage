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
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NavBar({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

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
          <Navbar.Brand as={Link} to="/">
            <img src="/Logo.svg" width="100px" height="auto" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsNavOpen(!isNavOpen)}
            style={{ border: "none" }}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ justifyContent: "flex-end" }}
            in={isNavOpen}
          >
            <StyledNav>
              <StyledNavLink
                as={Link}
                to="/#aboutus"
                className={activeSection === "aboutus" ? "active" : ""}
                onClick={() => setIsNavOpen(false)}
              >
                About Us
              </StyledNavLink>
              <StyledNavLink
                as={Link}
                to="/#curriculum"
                className={activeSection === "curriculum" ? "active" : ""}
                onClick={() => setIsNavOpen(false)}
              >
                Curriculum
              </StyledNavLink>
              <StyledNavLink
                as={Link}
                to="/#activity"
                className={activeSection === "activity" ? "active" : ""}
                onClick={() => setIsNavOpen(false)}
              >
                Activity
              </StyledNavLink>
              <ApplyButton
                onClick={() => {
                  setShowModal(true);
                  setIsNavOpen(false);
                }}
              >
                Apply
              </ApplyButton>
            </StyledNav>
          </Navbar.Collapse>
        </StyledContainer>
      </StyledNavbar>
      {children}
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
