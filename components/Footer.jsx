import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6"; // ✅ New Twitter X icon

// Footer
const Footer = () => {
  return (
    <div className="footer-container">
      <p>{new Date().getFullYear()} E-commerce Store. All rights reserved.</p>
      <p className="icons">
        {/* Instagram Link */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </a>

        {/* Twitter/X Link */}
        <a
          href="https://x.com/_sanidhyy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
      </p>
    </div>
  );
};

export default Footer;
