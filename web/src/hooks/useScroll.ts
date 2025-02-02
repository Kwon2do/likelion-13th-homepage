import { useState, useEffect } from "react";

interface IScrollReturn {
  showScrollArrow: boolean;
  showTopButton: boolean;
  scrollToTop: () => void;
}
export const useScroll = (): IScrollReturn => {
  const [showScrollArrow, setShowScrollArrow] = useState<boolean>(true);
  const [showTopButton, setShowTopButton] = useState<boolean>(false);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowScrollArrow(scrollTop === 0);
    setShowTopButton(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { showScrollArrow, showTopButton, scrollToTop };
};
