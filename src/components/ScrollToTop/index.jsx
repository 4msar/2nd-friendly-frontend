import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <Box>
      {" "}
      {showTopBtn && (
        <ArrowUpwardIcon
          className="icon-position icon-style"
          onClick={goToTop}
        />
      )}{" "}
    </Box>
  );
};
export default ScrollToTop;
