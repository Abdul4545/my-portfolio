import React from "react";
import "./Footer.css";
import gmail from "../Assets/gmail-logo.png";
import whatsapp from "../Assets/whatsapp-logo.png"
import env from "react-dotenv";

const Footer = () => {
  const contact = env.CONTACT
  return (
    <div className="footer">
      <div className="contact">
        Contact Me :
        <a href="mailto:khanmoid7398@gmail.com" target="_blank" rel="noreferrer">
          <img src={gmail} alt="email" className="gmail" />
        </a>

        <a href={`https://wa.me/+91${contact}?text=Hello%20there!`} target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="whatsapp" className="whatsapp" />
        </a>

      </div>
      <p>All Rights Reserved | Abdul Moid | 2025</p>
    </div>
  );
};

export default Footer;
