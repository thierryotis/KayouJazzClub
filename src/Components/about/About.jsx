import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          eros vel orci euismod commodo. In eget elit auctor, facilisis nisi
          sed, ullamcorper magna. Donec vitae lacus at nisl ultrices bibendum.
          Phasellus vel felis vitae justo pharetra dapibus ut non turpis.
          Integer tempor nunc ut sapien convallis, et malesuada dui feugiat.
          Fusce lacinia purus non arcu vehicula, in dignissim lacus lacinia.
          Vivamus sit amet dictum turpis, non fringilla dolor.
        </p>

        <p>
          Praesent eget velit a enim malesuada fermentum. Nulla facilisi.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Phasellus sed sem velit. Nam non lacus a mi
          pharetra eleifend a nec sapien. Curabitur id nunc sit amet dui
          convallis feugiat. Sed at orci vel sapien feugiat pulvinar. Etiam et
          libero et erat cursus sodales vel in ligula. Cras lacinia, mauris sit
          amet dictum dignissim, risus dui sodales turpis, sed volutpat orci
          libero id lectus.
        </p>

        <p>
          Fusce ullamcorper sapien et est tristique sagittis. Morbi ut nulla sed
          nisi tincidunt ultricies. Suspendisse potenti. Sed vitae justo non
          odio fringilla egestas a a nulla. Quisque ac tincidunt orci. Nulla vel
          posuere nisl, nec varius tortor. Mauris faucibus odio at sem pharetra,
          sit amet condimentum justo pulvinar. Aliquam vehicula mi non purus
          pharetra, et ultricies nulla dignissim.
        </p>
      </div>
    </div>
  );
};

export default About;
