import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionWrapper, SectionTitle } from './SectionContainer.styles';
import Section from '../../../../components/common/Section';
import AboutUsComponent from '../AboutUs';
import CurriculumComponent from '../Curriculum';
import ActivityComponent from '../Activity';
import ScheduleComponent from '../Schedule';
import QuestionComponent from '../Question';
import SectionDivider from '../SectionDivider';

gsap.registerPlugin(ScrollTrigger);

const SectionContainer: React.FC = () => {
  const introRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    // 인트로 섹션 애니메이션 설정
    if (h1Ref.current) {
      gsap.set(h1Ref.current, {
        opacity: 1,
        color: 'darkgray',
        fontSize: '24px',
      });
    }
    
    if (!introRef.current || !h1Ref.current) return;
    
    const introTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: introRef.current,
        start: 'top top',
        end: '+=150%',
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    introTimeline.to(h1Ref.current, {
      fontSize: '48px',
      color: 'rgb(255, 119, 16)',
      ease: 'none',
    });

    introTimeline.to(h1Ref.current, { opacity: 0, ease: 'none' }, '>0.1');

    // 각 섹션 애니메이션 설정
    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, boxShadow: '0px 0px 0px rgba(0,0,0,0)' },
          {
            opacity: 1,
            boxShadow: '0px 10px 30px rgba(0,0,0,0.3)',
            ease: 'power1.out',
            duration: 0.5,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 100%',
              scrub: true,
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Section 
        id="intro" 
        ref={introRef} 
        style={{ overflow: 'visible' }}
        backgroundColor="black"
      >
        <SectionTitle
          ref={h1Ref}
          style={{ marginTop: '30vh' }}
        >
          당신의 가능성을 키울 곳, 멋쟁이사자처럼!
          <br />
          지금부터 자세히 소개할게요.
        </SectionTitle>
      </Section>
      
      <Section
        id="aboutus"
        ref={(el) => {
          sectionsRef.current[0] = el;
        }}
        backgroundColor="black"
      >
        <SectionWrapper>
          <AboutUsComponent />
        </SectionWrapper>
      </Section>
      
      <Section
        id="curriculum"
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
        backgroundColor="black"
      >
        <SectionWrapper>
          <CurriculumComponent />
        </SectionWrapper>
      </Section>
      
      <Section
        id="activity"
        ref={(el) => {
          sectionsRef.current[2] = el;
        }}
        backgroundColor="black"
      >
        <SectionWrapper>
          <ActivityComponent />
        </SectionWrapper>
      </Section>
      
      <Section
        id="schedule"
        ref={(el) => {
          sectionsRef.current[3] = el;
        }}
        backgroundColor="black"
      >
        <SectionWrapper>
          <ScheduleComponent />
        </SectionWrapper>
      </Section>
      
      <Section
        id="question"
        ref={(el) => {
          sectionsRef.current[4] = el;
        }}
        backgroundColor="black"
      >
        <SectionWrapper>
          <SectionDivider />
          <QuestionComponent />
        </SectionWrapper>
      </Section>
    </>
  );
};

export default SectionContainer;
