import React, { useRef } from "react";
import "./Project.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/about.png";
import user_2 from "../../assets/user-2.png";

const Project = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 50;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 50;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="project">
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
            <div className="project-info">
              <img src={user_1} alt="" />
            </div>
            <div className="project-desc">
              <h3>The Orchestra at School</h3>
              <p>
                In 2016, Kayou introduced music to children from underprivileged
                backgrounds in Cameroon—many of whom had never touched an
                instrument. As they picked up their instruments, curiosity
                turned into excitement. These children weren’t just learning
                music; they were building confidence, teamwork, and discovering
                their potential.
              </p>
              <p>
                Since then, <b>The Orchestra at School</b> has reached hundreds
                of children, teaching them life skills that go beyond the
                classroom—discipline, creativity, and a sense of belonging. The
                program has transformed their lives, improved school performance
                and strengthening social connections.
              </p>
              <button className="btn dark-btn">Get Involved</button>
            </div>
          </li>
          <li className="slide">
            <div className="project-info">
              <img src={user_2} alt="" />
            </div>
            <div className="project-desc">
              <h3>Swing Back to the Roots</h3>
              <p>
                Kayou always believed in the deep connection between African
                music and jazz. Reflecting on Africa’s rhythms that shaped jazz,
                he realized this cultural legacy remained underexplored
                globally—sparking the creation of Swing Back to the Roots.
              </p>
              <p>
                This project is more than music; it celebrates Africa’s diverse
                heritage by blending traditional African rhythms with modern
                jazz. Through collaborations with global musicians, Kayou Jazz
                Club creates a unique cultural fusion that transcends
                performances, fostering deep cross-cultural learning.
              </p>
              <p>
                Revenue from Swing Back to the Roots supports the Orchestra at
                School, helping more African children access music education. By
                preserving and evolving African music, Kayou Jazz Club empowers
                future generations.
              </p>
              <button className="btn dark-btn">Get Involved</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Project;
