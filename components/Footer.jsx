import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

// Footer
const Footer = () => {
  return (
    <div className="footer-container">
      <p>{new Date().getFullYear()} E-commerce Store. All rights reserved.</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
