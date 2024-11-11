import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li className="slide">
            <div className="user-info">
              <img src={user_1} alt="" />
              <div>
                <h3>ILian Gropi 1</h3>
                <span>Kayou, Cameroun</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae eros vel orci euismod commodo. In eget elit auctor,
              facilisis nisi sed, ullamcorper magna. Donec vitae lacus at nisl
              ultrices bibendum. Phasellus vel felis vitae justo pharetra
              dapibus ut non turpis. Integer tempor nunc ut sapien convallis, et
              malesuada dui feugiat. Fusce lacinia purus non arcu vehicula, in
              dignissim lacus lacinia. Vivamus sit amet dictum turpis, non
              fringilla dolor.
            </p>
          </li>
          <li className="slide">
            <div className="user-info">
              <img src={user_2} alt="" />
              <div>
                <h3>Cathérine Deneuve 2</h3>
                <span>Kayou, Cameroun</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae eros vel orci euismod commodo. In eget elit auctor,
              facilisis nisi sed, ullamcorper magna. Donec vitae lacus at nisl
              ultrices bibendum. Phasellus vel felis vitae justo pharetra
              dapibus ut non turpis. Integer tempor nunc ut sapien convallis, et
              malesuada dui feugiat. Fusce lacinia purus non arcu vehicula, in
              dignissim lacus lacinia. Vivamus sit amet dictum turpis, non
              fringilla dolor.
            </p>
          </li>
          <li className="slide">
            <div className="user-info">
              <img src={user_3} alt="" />
              <div>
                <h3>William Jackson 3</h3>
                <span>Kayou, Cameroun</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae eros vel orci euismod commodo. In eget elit auctor,
              facilisis nisi sed, ullamcorper magna. Donec vitae lacus at nisl
              ultrices bibendum. Phasellus vel felis vitae justo pharetra
              dapibus ut non turpis. Integer tempor nunc ut sapien convallis, et
              malesuada dui feugiat. Fusce lacinia purus non arcu vehicula, in
              dignissim lacus lacinia. Vivamus sit amet dictum turpis, non
              fringilla dolor.
            </p>
          </li>
          <li className="slide">
            <div className="user-info">
              <img src={user_4} alt="" />
              <div>
                <h3>Yvan Lacarte 4</h3>
                <span>Kayou, Cameroun</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae eros vel orci euismod commodo. In eget elit auctor,
              facilisis nisi sed, ullamcorper magna. Donec vitae lacus at nisl
              ultrices bibendum. Phasellus vel felis vitae justo pharetra
              dapibus ut non turpis. Integer tempor nunc ut sapien convallis, et
              malesuada dui feugiat. Fusce lacinia purus non arcu vehicula, in
              dignissim lacus lacinia. Vivamus sit amet dictum turpis, non
              fringilla dolor.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
