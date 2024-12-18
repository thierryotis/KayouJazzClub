import React from "react";
import "./Programs.css";
import Program_1 from "../../assets/kayou.jpg";
import Program_2 from "../../assets/nkoumouyannick.jpg";
import white_arrow from '../../assets/white-arrow.png'


const Programs = () => {
  return (
    <>
    <div className="programs team">
      <div className="program">
        <img src={Program_1} alt="" />
        <div className="caption">
          <h2>Kayou</h2>
          <p>
            Kayou, a renowned Cameroonian saxophonist, founded Kayou Jazz Club
            with a mission: to use music as a tool for social change. A graduate
            of the Conservatoire of Cergy-Pontoise in France, Kayou has
            performed with legends like Manu Dibango and Youssou N'Dour. In
            2016, he launched The Orchestra at School, bringing music education
            to underprivileged children in Cameroon, fostering life skills like
            confidence and teamwork.
          </p>
        </div>
      </div>
      <div className="program">
        <img src={Program_2} alt="" />
        <div className="caption">
          <h2>Yannick Noumou</h2>
          <p>
            Joining him is Yannick Nkoumou, a Senior Consultant in social and
            behavior change, who co-founded the club, convinced of music’s power
            to drive Africa’s development. With expertise in strategic
            management, Yannick ensures the smooth running of all projects,
            blending his passion for art with social impact.
          </p>
        </div>
      </div>
      
    </div>
    {/*<button className='btn dark-btn pg'>Join Us <img src={white_arrow} alt=""/></button>*/}
    </>
  );
};

export default Programs;
