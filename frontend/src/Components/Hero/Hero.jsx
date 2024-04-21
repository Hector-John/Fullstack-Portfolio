import React from "react";
import "./Hero.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { Link } from "react-scroll";

const Hero = () => {
  const linkToLinkedIn = "https://www.linkedin.com/in/john-hector/";
  const linkToGitHub = "https://github.com/Hector-John";
  const linkToMail = "mailto:hectorjohn254@gmail.com";

  const LinkedIn = () => {
    window.open(linkToLinkedIn, "_blank");
  };

  const GitHub = () => {
    window.open(linkToGitHub, "_blank");
  };

  const Mail = () => {
    window.open(linkToMail, "_blank");
  };

  return (
    <div className="hero container" id="hero">
      <div className="right">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="headerInfo"
        >
          <div className="badge">
            <div className="about">
              <div>
                <p>Hello, I'm</p>
                <p className="name">Hector John</p>
                <p>
                  A creative and versatile <span>Frontend Developer</span>
                </p>

                <p>
                  A dynamic problem solver, proficient in frontend development,
                  and adept at creating engaging user experiences.
                </p>
                <div className="socials">
                  
                    <Link
                      to="about"
                      smooth={true}
                    >
                      <button className="btn2">
                      About Me 
                      </button>
                    </Link>
                 
                  <div className="links">
                    <BiLogoLinkedin
                      size={25}
                      style={{ cursor: "pointer", marginRight: "10px" }}
                      onClick={LinkedIn}
                    />

                    <CgMail
                      size={25}
                      style={{ cursor: "pointer", marginRight: "10px" }}
                      onClick={Mail}
                    />
                    <AiOutlineGithub
                      size={25}
                      style={{ cursor: "pointer", marginRight: "10px" }}
                      onClick={GitHub}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="left">
        <motion.div
          whileInView={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="headerImg"
        >
          <img src={images.profile} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
