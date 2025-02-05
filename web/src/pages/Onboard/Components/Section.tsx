import React, { useEffect, useRef } from "react";
import { Section } from "../styles/Onboard.styles";
import ActivityComponent from "./Activity";
import ScheduleComponent from "./Schedule";
import CurriculumComponent from "./Curriculum";
import AboutUsComponent from "./Aboutus";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AllSectionComponent: React.FC = () => {
  const introRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    if (h1Ref.current) {
      gsap.set(h1Ref.current, {
        opacity: 1,
        color: "darkgray",
        fontSize: "24px",
      });
    }
    if (!introRef.current || !h1Ref.current) return;
    const introTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: introRef.current,
        start: "top top", // intro 섹션 시작 시점
        end: "+=150%", // 스크롤 거리는 상황에 맞게 조절
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // h1의 글자 크기와 글자색 애니메이션 (초기 darkgray에서 rgb(255,119,16)로)
    introTimeline.to(h1Ref.current, {
      fontSize: "48px",
      color: "rgb(255, 119, 16)",
      ease: "none",
    });

    // h1의 투명도를 낮추어 사라지게 함
    introTimeline.to(
      h1Ref.current,
      { opacity: 0, ease: "none" },
      ">0.1" // 약간의 딜레이 후 진행
    );

    // 각 섹션에 대해 shadowContainer 효과 (fade-in 및 그림자 효과) 적용
    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
          {
            opacity: 1,
            boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
            ease: "power1.out",
            duration: 0.5,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 100%", // 애니메이션이 끝나는 시점을 추가
              scrub: true, // 스크롤 내릴 때뿐만 아니라 올릴 때도 동일하게 적용됨
              // markers: true,   // 디버깅용
            },
          }
        );
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  useEffect(() => {}, []);
  return (
    <>
      <Section id="intro" ref={introRef} style={{ overflow: "visible" }}>
        <h1
          ref={h1Ref}
          style={{ color: "darkgray", fontSize: "24px", marginTop: "30vh" }}
        >
          인천대학교 최고의 IT 동아리 <br />
          멋쟁이사자처럼을 소개합니다!
        </h1>
      </Section>
      <Section
        id="AboutUs"
        ref={(el) => {
          sectionsRef.current[0] = el;
        }}
      >
        <AboutUsComponent />
      </Section>
      <Section
        id="Curriculum"
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
      >
        <CurriculumComponent />
      </Section>
      <Section
        id="Activity"
        ref={(el) => {
          sectionsRef.current[2] = el;
        }}
      >
        <ActivityComponent />
      </Section>
      <Section
        id="schedule"
        ref={(el) => {
          sectionsRef.current[3] = el;
        }}
      >
        <ScheduleComponent />
      </Section>
    </>
  );
};

export default AllSectionComponent;
