import React, { useRef, useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-200px";
  };

  const handleDownloadCV = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/path/to/your/cv.pdf";
    downloadLink.download = "cv.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="navbar container" id="home">
      <div className="logo">
        <a href="/">
          <img src={images.logo} alt="Logo" />
        </a>
      </div>
      <RiMenu4Line
        onClick={openMenu}
        className="open"
        size={35}
        style={{ cursor: "pointer" }}
      />
      <ul className="navMenu" ref={menuRef}>
        <li>
          <AiOutlineClose
            onClick={closeMenu}
            className="close"
            size={30}
            style={{ cursor: "pointer" }}
          />
          <AnchorLink
            href="#home"
            className={menu === "home" ? "active" : ""}
            onClick={() => {
              setMenu("home");
              closeMenu();
            }}
          >
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            offset={20}
            href="#services"
            className={menu === "services" ? "active" : ""}
            onClick={() => {
              setMenu("about");
              closeMenu();
            }}
          >
            My Services
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            offset={30}
            href="#projects"
            className={menu === "projects" ? "active" : ""}
            onClick={() => {
              setMenu("projects");
              closeMenu();
            }}
          >
            Projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            offset={50}
            href="#contact"
            className={menu === "contact" ? "active" : ""}
            onClick={() => {
              setMenu("contact");
              closeMenu();
            }}
          >
            Contact
          </AnchorLink>
        </li>
        <button
          className="btn1"
          onClick={() => {
            closeMenu();
            handleDownloadCV();
          }}
        >
          Download CV
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
