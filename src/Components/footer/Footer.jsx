import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer container">
      <p className="social-media">
        <FaFacebook size={20} color="#fff" /> 
        <FaTwitter size={20} color="#fff" /> 
      </p>
      <p className="copyright">2024 Kayou. All Rights reserved</p>
      <ul>
        <li>Terms of services</li>
        <li>privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
