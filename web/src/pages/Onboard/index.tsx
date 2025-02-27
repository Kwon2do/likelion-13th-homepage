import { useState, useRef, useEffect } from 'react';
import { PageContainer, FloatingTopButton } from './styles/Onboard.styles';
import { useScroll } from '../../hooks/useScroll';
import Banner from './components/Banner';
import SectionContainer from './components/SectionContainer';
import Footer from '../../components/layout/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Onboard() {
  const [showModal, setShowModal] = useState(false);
  const { scrollToTop, showScrollArrow, showTopButton } = useScroll();
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: 'bottom+=50vh',
          scrub: true,
        },
      })
      .to(wrapperRef.current, { opacity: 0 })
      .fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1 }, '<');
  }, []);

  return (
    <>
      <PageContainer>
        <div ref={wrapperRef}>
          <Banner showScrollArrow={showScrollArrow} />
        </div>
        <div ref={sectionRef}>
          <SectionContainer />
        </div>
        {showTopButton && (
          <FloatingTopButton onClick={scrollToTop}>TOP ↑</FloatingTopButton>
        )}
      </PageContainer>
      <Footer />
    </>
  );
}
