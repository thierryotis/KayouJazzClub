import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import heroImg from '../../assets/slider1.jpg';
import heroImg2 from '../../assets/slider2.jpg';
import heroImg3 from '../../assets/slider3.jpg';

const Hero = () => {
  const slider = useRef();
  const [heroImages] = useState([heroImg, heroImg2, heroImg3]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null); // Pour gérer l'intervalle
  const totalSlides = heroImages.length;

  // Fonction pour avancer au prochain slide
  const slideForward = () => {
    const newIndex = (currentIndex + 1) % totalSlides; // Boucle au début si on dépasse la fin
    setCurrentIndex(newIndex);
    slider.current.style.transform = `translateX(-${newIndex * 33.33}%)`;
  };

  // Fonction pour reculer au slide précédent
  const slideBackward = () => {
    const newIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Boucle à la fin si on dépasse le début
    setCurrentIndex(newIndex);
    slider.current.style.transform = `translateX(-${newIndex * 33.33}%)`;
  };

  // Mettre en place un intervalle pour avancer automatiquement
  useEffect(() => {
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        slideForward();
      }, 3000); // Change tous les 3 secondes
    };

    startAutoSlide();

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalRef.current);
  }, [currentIndex]);

  // Arrêter l'auto-slide temporairement lors d'une interaction utilisateur
  const handleUserInteraction = (action) => {
    clearInterval(intervalRef.current); // Arrêter l'intervalle actuel
    action(); // Exécuter l'action (slideForward ou slideBackward)
    // Relancer l'auto-slide après une courte pause
    setTimeout(() => {
      const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
          slideForward();
        }, 3000);
      };
      startAutoSlide();
    }, 5000); // Reprendre l'auto-slide après 5 secondes d'inactivité
  };

  return (
    <div
      className="hero container"
      style={{
        backgroundImage: `url(${heroImages[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src={next_icon}
        alt="Next"
        className="next-btn"
        onClick={() => handleUserInteraction(slideForward)}
      />
      <img
        src={back_icon}
        alt="Back"
        className="back-btn"
        onClick={() => handleUserInteraction(slideBackward)}
      />
      <div className="slider">
        <ul ref={slider}>
          <li className="slide">
            <div className="hero-text">
              <h1>Unlocking potential through the power of Music</h1>
              <p>
                At Kayou Jazz Club, every note is a step towards a brighter
                future—where music shapes mind, builds communities, and
                celebrates Africa’s rich cultural legacy.
              </p>
              <button className="btn">Learn More</button>
            </div>
          </li>
          <li className="slide">
            <div className="hero-text">
              <h1>Empowering the next generation, one note at a time</h1>
              <p>
                Through music education and cultural exchange, we inspire
                children to dream big, build confidence, and create a brighter
                future for themselves and their communities.
              </p>
              <button className="btn">Learn More</button>
            </div>
          </li>
          <li className="slide">
            <div className="hero-text">
              <h1>Bringing African Music to the world stage</h1>
              <p>
                By blending Africa’s rich rhythms with global sounds, we
                celebrate cultural diversity and introduce the world to the soul
                of African music, one performance at a time.
              </p>
              <button className="btn">Learn More</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
