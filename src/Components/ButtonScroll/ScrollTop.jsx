import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

import "./style.css";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollTop() {
   const [showButton, setShowButton] = useState(false);
   
   const handleScroll = () => {
      if (window.scrollY > 100) {
      setShowButton(true);
      } else {
      setShowButton(false);
      }
   };

   const scrollToTop = () => {
      const scrollStep = -window.scrollY / 20;

      const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
         window.scrollBy(0, scrollStep);
      } else {
         clearInterval(scrollInterval);
      }
      }, 15);
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
      window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return(
      <div className={`scrollToTop ${showButton ? "show" : ""}`}>
          <Button
            variant="primary"
            onClick={scrollToTop}
            className="buttonScroll"
          >
            <IoIosArrowUp />
          </Button>
        </div>
   );
}