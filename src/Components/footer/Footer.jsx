import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer container">
      <p className="social-media">
        <FaFacebook className="icon" size={20} color="#fff" />
        <FaTwitter className="icon" size={20} color="#fff" />
        <FaInstagram className="icon" size={20} color="#fff" />
        <FaYoutube className="icon" size={20} color="#fff" />
      </p>
      <p className="copyright">
        {" "}
        {currentYear} Kayou Jazz Club . All Rights Reserved.
      </p>
      <ul>
        <li>Terms of services</li>
        <li>privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
