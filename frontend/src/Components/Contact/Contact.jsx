import React from "react";
import "./Contact.scss";

import { BiLogoFacebook } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";

const Contact = () => {
  const linkToLinkedIn = "https://www.linkedin.com/in/john-hector/";
  const linkToGitHub = "https://github.com/Hector-John";
  const phoneNumber = "+254769403162";
  const emailAddress = "hectorjohn254@gmail.com";
  const whatsapp = "whatsapp.com";

  const LinkedIn = () => {
    window.open(linkToLinkedIn, "_blank");
  };

  const GitHub = () => {
    window.open(linkToGitHub, "_blank");
  };
  const Whatsapp = () => {
    window.open(linkToGitHub, "_blank");
  };

  const makeCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="contact container" id="contact">
      <h1>Get In Touch</h1>
      <div className="contactSection">
        <div className="left">
          <h1>Let's Talk</h1>
          <p>
            If you have any questions or would like to discuss a project, feel
            free to reach out to me. I'm always open to new opportunities and
            collaborations.
          </p>
          <div className="contactDetails">
            <div className="contactDetail" onClick={GitHub}>
              <CgMail size={30} />{" "}
              <p
                onClick={() =>
                  (window.location.href = `mailto:${emailAddress}`)
                }
              >
                {emailAddress}
              </p>
            </div>
            <div className="contactDetail" onClick={makeCall}>
              <BsTelephone size={30} />
              <p>{phoneNumber}</p>
            </div>
          </div>
          <div className="socials">
            <BiLogoFacebook
              size={35}
              style={{ cursor: "pointer", color: "blue" }}
              onClick={LinkedIn}
            />
            <BiLogoInstagram
              size={35}
              style={{ cursor: "pointer", color: "mmaroon" }}
              onClick={GitHub}
            />
            <BiLogoWhatsapp
              size={35}
              style={{ cursor: "pointer", color: "green" }}
              onClick={Whatsapp}
            />
          </div>
        </div>

        <div className="right">
          <form>
            <label htmlFor="">Enter your name</label>
            <input type="text" placeholder="Enter your name" name="name" />
            <label htmlFor="">Enter your email</label>
            <input type="email" placeholder="Enter your email" name="email" />
            <label htmlFor="">Write your message</label>
            <textarea
              name="message"
              id=""
              rows="8"
              placeholder="Talk to me"
            ></textarea>
            <button type="submit" className="submit btn2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
