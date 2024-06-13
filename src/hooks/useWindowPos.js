import { useEffect, useState } from "react";

const useWindowPos = ({ target }) => {
  const [scrolled, setScrolled] = useState(false);

  const handlePageScroll = () => setScrolled(window.scrollY >= target);

  useEffect(() => {
    window.addEventListener("scroll", handlePageScroll);
    return () => {
      window.removeEventListener("scroll", handlePageScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    scrolled,
  };
};

export default useWindowPos;
