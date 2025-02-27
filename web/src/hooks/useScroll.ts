import { useState, useEffect, useCallback } from "react";

interface ScrollHookResult {
  showScrollArrow: boolean;
  showTopButton: boolean;
  scrollToTop: () => void;
  scrollToSection: (sectionId: string) => void;
}

/**
 * 스크롤 관련 기능을 제공하는 커스텀 훅
 * 
 * @returns {ScrollHookResult} 스크롤 화살표 표시 여부, 상단 이동 버튼 표시 여부, 상단으로 이동 함수, 특정 섹션으로 이동 함수
 */
export const useScroll = (): ScrollHookResult => {
  const [showScrollArrow, setShowScrollArrow] = useState<boolean>(true);
  const [showTopButton, setShowTopButton] = useState<boolean>(false);

  // 페이지 상단으로 스크롤
  const scrollToTop = useCallback((): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  // 특정 섹션으로 스크롤
  const scrollToSection = useCallback((sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
    }
  }, []);

  // 스크롤 이벤트 핸들러
  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowScrollArrow(scrollTop === 0);
    setShowTopButton(scrollTop > 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { showScrollArrow, showTopButton, scrollToTop, scrollToSection };
};
