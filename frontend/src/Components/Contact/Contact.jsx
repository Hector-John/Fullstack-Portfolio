import React from "react";
import "./Contact.scss";

import { CgMail } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
import { BiLogoFacebook, BiLogoInstagram, BiLogoWhatsapp } from "react-icons/bi";
import { FaBehance } from "react-icons/fa";

const Contact = () => {
  const linkToBehance = "https://www.behance.net/hectorjohn2";
  const linkToFb = "https://www.facebook.com/profile.php?id=100091358486942";
  const linkToIg = "https://www.instagram.com/_h.e.c.t.o.r_j.o.h.n_?igsh=MTlkaGhjM2IxbWl1aA==";
  const phoneNumber = "+254769403162";
  const emailAddress = "hectorjohn254@gmail.com";
  const whatsapp = "https://api.whatsapp.com/send?phone=254738358757&text=Hello%2C%20I%27m%20interested%20in%20your%20services.";

  const Behance = () => {
    window.open(linkToBehance, "_blank");
  };
  const Facebook = () => {
    window.open(linkToFb, "_blank");
  };

  const Instagram = () => {
    window.open(linkToIg, "_blank");
  };
  const Whatsapp = () => {
    window.open(whatsapp, "_blank");
  };

  const makeCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "33f4852a-6e2b-4f83-9fec-ec6978f55c8c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
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
            <div className="contactDetail" onClick={makeCall}>
              <BsTelephone size={30} />
              <p>{phoneNumber}</p>
            </div>
            <div className="contactDetail" onClick={() => window.location.href = `mailto:${emailAddress}`}>
              <CgMail size={30} />
              <p>{emailAddress}</p>
            </div>
          </div>
          <div className="socials">
            <BiLogoFacebook
              size={35}
              style={{ cursor: "pointer", color: "blue" }}
              onClick={Facebook}
            />
            <BiLogoInstagram
              size={35}
              style={{ cursor: "pointer", color: "maroon" }}
              onClick={Instagram}
            />
            <BiLogoWhatsapp
              size={35}
              style={{ cursor: "pointer", color: "green" }}
              onClick={Whatsapp}
            />
            <FaBehance
              size={35}
              style={{ cursor: "pointer", color: "black" }}
              onClick={Behance}
            />
          </div>
        </div>

        <div className="right">
          <form onSubmit={onSubmit}>
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
