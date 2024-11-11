import React, { useRef, useState } from "react";
import "./Hero.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import heroImg from '../../assets/hero.png'
import heroImg2 from '../../assets/hero-2.png'
import heroImg3 from '../../assets/hero.png'

const Hero = () => {
  const slider = useRef();
  const [heroImages, setHeroImages] = useState([heroImg, heroImg2, heroImg3])
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidth = 100; // Largeur de chaque slide en pourcentage
  const totalSlides = 3; // Nombre total de slides (ici, 3 dans l'exemple)

  const slideForward = () => {
    if (currentIndex < totalSlides - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      slider.current.style.transform = `translateX(-${newIndex * 33.33}%)`;
    }
  };

  const slideBackward = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      slider.current.style.transform = `translateX(-${newIndex * 33.33}%)`;
    }
  };

  

  return (
    <div className="hero container" style={{
      backgroundImage: `url(${heroImages[currentIndex]})`, // Ajouter l'image en tant que fond
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li className="slide" >
            <div className="hero-text">
              <h1>Unlocking potential through the power of Music</h1>
              <p>
                At Kayou Jazz Club, every note is a step towards a brighter future—where music shapes mind, builds communities, and celebrates Africa’s rich cultural legacy.
              </p>
              <button className="btn">Learn More</button>
            </div>
          </li>
          <li className="slide">
            <div className="hero-text">
              <h1>Empowering the next generation, one note at a time</h1>
              <p>
                Through music education and cultural exchange, we inspire children to dream big, build confidence, and create a brighter future for themselves and their communities.
              </p>
              <button className="btn">Learn More </button>
            </div>
          </li>
          <li className="slide">
            <div className="hero-text">
              <h1>Bringing African Music to the world stage</h1>
              <p>
                By blending Africa’s rich rhythms with global sounds, we celebrate cultural diversity and introduce the world to the soul of African music, one performance at a time.
              </p>
              <button className="btn">Learn More </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
