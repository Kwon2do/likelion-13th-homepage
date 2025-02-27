import React, { useEffect, useRef } from "react";
import { Section } from "../styles/Onboard.styles";
import ActivityComponent from "./Activity";
import ScheduleComponent from "./Schedule";
import CurriculumComponent from "./Curriculum";
import AboutUsComponent from "./AboutUs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import QuestionComponent from "./Question";
import SectionDivider from "./Divider";
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
        start: "top top",
        end: "+=150%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    introTimeline.to(h1Ref.current, {
      fontSize: "48px",
      color: "rgb(255, 119, 16)",
      ease: "none",
    });

    introTimeline.to(h1Ref.current, { opacity: 0, ease: "none" }, ">0.1");

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
              end: "bottom 100%",
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
  useEffect(() => {}, []);
  return (
    <>
      <Section id="intro" ref={introRef} style={{ overflow: "visible" }}>
        <h1
          ref={h1Ref}
          style={{ color: "white", fontSize: "24px", marginTop: "30vh" }}
        >
          당신의 가능성을 키울 곳, 멋쟁이사자처럼!
          <br />
          지금부터 자세히 소개할게요.
        </h1>
      </Section>
      <Section
        id="aboutus"
        ref={(el) => {
          sectionsRef.current[0] = el;
        }}
      >
        <AboutUsComponent />
      </Section>
      <Section
        id="curriculum"
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
      >
        <CurriculumComponent />
      </Section>
      <Section
        id="activity"
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
      <Section
        id="question"
        ref={(el) => {
          sectionsRef.current[4] = el;
        }}
      >
        <SectionDivider />
        <QuestionComponent />
      </Section>
    </>
  );
};

export default AllSectionComponent;
