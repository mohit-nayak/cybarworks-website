import { useEffect, useState } from "react";

const MOBILE_WIDTH = 767;
const TAB_WIDTH = 1100;

const useWindowWidth = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isTabView, setIsTabView] = useState(false);

  const handlePageResize = () => {
    setIsMobileView(window.innerWidth <= MOBILE_WIDTH);
    setIsTabView(
      window.innerWidth > MOBILE_WIDTH && window.innerWidth <= TAB_WIDTH,
    );
  };

  useEffect(() => {
    handlePageResize();

    window.addEventListener("resize", handlePageResize);
    return () => {
      window.removeEventListener("resize", handlePageResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isMobileView,
    isTabView,
  };
};

export default useWindowWidth;
