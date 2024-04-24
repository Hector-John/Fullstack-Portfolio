import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./UpArrow.scss";

const UpArrow = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.pageYOffset > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={`up-arrow ${showArrow ? "show" : "hide"}`} id="Up">
      <FaArrowCircleUp onClick={scrollToTop} />
      <span className="tooltip">Top</span>
    </div>
  );
};

export default UpArrow;
