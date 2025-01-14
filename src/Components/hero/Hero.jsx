import React, { useState, useEffect } from "react";
import "./Hero.css";
import heroImg1 from "../../assets/slider1.jpg";
import heroImg2 from "../../assets/slider2.jpg";
import heroImg3 from "../../assets/slider3.jpg";

const Hero = () => {
  const slides = [
    {
      image: heroImg1,
      title: "Unlocking potential through the power of Music",
      description:
        "At Kayou Jazz Club, every note is a step towards a brighter future—where music shapes minds, builds communities, and celebrates Africa’s rich cultural legacy.",
    },
    {
      image: heroImg2,
      title: "Empowering the next generation, one note at a time",
      description:
        "Through music education and cultural exchange, we inspire children to dream big, build confidence, and create a brighter future for themselves and their communities.",
    },
    {
      image: heroImg3,
      title: "Bringing African Music to the world stage",
      description:
        "By blending Africa’s rich rhythms with global sounds, we celebrate cultural diversity and introduce the world to the soul of African music, one performance at a time.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Passer au prochain slide automatiquement
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change toutes les 5 secondes
    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length); // Boucle au début
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length); // Boucle à la fin
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex}`}
          className="carousel-image"
        />
        <div className="carousel-caption">
          <h2>{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p>
        </div>
      </div>
      <button className="carousel-btn prev" onClick={prevSlide}>
        &#10094; {/* Flèche gauche */}
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        &#10095; {/* Flèche droite */}
      </button>
    </div>
  );
};

export default Hero;
