import React from "react";
import "./Intro.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="intro">
      <div className="box">
        <div className="inside">
          <FaTwitter
            className="icon-circle"
          />
          <h3>Parcours</h3>
          <p>
            This program offers underprivileged children in Africa access to
            music education, helping them build life skills like confidence,
            teamwork, and discipline
          </p>
        </div>
      </div>

      <div className="box">
        <div className="inside">
          <FaTwitter className="icon-circle" />
          <h3>Parcours</h3>
          <p>
            This program offers underprivileged children in Africa access to
            music education, helping them build life skills like confidence,
            teamwork, and discipline
          </p>
        </div>
      </div>

      <div className="box">
        <div className="inside">
          <FaTwitter className="icon-circle" />
          <h3>Parcours</h3>
          <p>
            This program offers underprivileged children in Africa access to
            music education, helping them build life skills like confidence,
            teamwork, and discipline
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
