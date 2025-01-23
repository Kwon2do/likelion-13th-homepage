import { useState, useEffect } from "react";

export const useScroll = () => {
  const [showScrollArrow, setShowScrollArrow] = useState(true);
  const [showTopButton, setShowTopButton] = useState(false);

  const scrollToTop = () => {
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
