import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Modal from '../../common/Modal';
import {
  StyledNavbar,
  StyledContainer,
  StyledNav,
  StyledNavLink,
  ApplyButton,
  NavbarToggle
} from './Navigation.styles';

interface NavigationProps {
  children: React.ReactNode;
}

const Navigation: React.FC<NavigationProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const location = useLocation();

  // 해시 링크에 따라 스크롤 조정
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  }, [location]);

  // 현재 보고 있는 섹션 감지
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-70px 0px 0px 0px' }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <StyledNavbar expand="lg" data-bs-theme="light">
        <StyledContainer>
          <Navbar.Brand as={Link} to="/">
            <img src="/Logo.svg" width="100px" height="auto" alt="멋쟁이사자처럼 인천대학교 로고" />
          </Navbar.Brand>
          <NavbarToggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
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
      <ApplyInfoModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

interface ApplyModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

const ApplyInfoModal: React.FC<ApplyModalProps> = ({ setShowModal, showModal }) => {
  return (
    <Modal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      title="멋쟁이사자처럼 인천대학교"
    >
      <div style={{ textAlign: 'center' }}>
        <img src="/favicon.ico" alt="멋쟁이사자처럼 아이콘" style={{ width: '50px', marginBottom: '16px' }} />
        <div style={{ fontFamily: "Pretendard-Bold", fontSize: "20px", marginBottom: '8px' }}>
          지금은 지원 기간이 아니에요
        </div>
        <p>모집 일정은 홈페이지 하단 Q&A를 참고해주세요.</p>
      </div>
    </Modal>
  );
};

export default Navigation;
