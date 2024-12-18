import React from "react";
import "./About.css";
import about_img from "../../assets/aboutus.jpg";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About Us</h3>
        <h2>Kayou Jazz Club</h2>
        <p>
          Founded by Cameroonian saxophonist Kayou, is a social enterprise
          dedicated to using music for social change. We nurture talent and
          foster development in African communities through two key initiatives:
        </p>

        <p>
          1. <b>The Orchestra at School:</b> This program offers underprivileged
          children in Africa access to music education, helping them build life
          skills like confidence, teamwork, and discipline.
        </p>

        <p>
          2. <b>Swing Back to the Roots:</b> By blending African rhythms with modern
          jazz, we reconnect jazz with its African roots, promoting African
          music globally while supporting our education programs.
        </p>
        <p>
          At Kayou Jazz Club, we believe music empowers future generations and
          celebrates Africa’s cultural legacy.
        </p>
      </div>
    </div>
  );
};

export default About;
