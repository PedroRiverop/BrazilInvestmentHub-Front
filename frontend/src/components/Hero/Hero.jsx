import React, { useEffect, useState } from "react";
import "./Hero.css";
import hero1 from "../../assets/img/home1.png";
import hero2 from "../../assets/img/home2.jpg";
import hero3 from "../../assets/img/home3.jpg";
    
const images = [hero1, hero2, hero3];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prev) => (prev + 1) % images.length);
        }, 5000); // cada 5 segundos
        return () => clearInterval(interval);
      }, []);

    return (
        <section
            id="home"
            className="hero-section d-flex align-items-center justify-content-center text-center"
            style={{ backgroundImage: `url(${images[index]})` }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-white">
                <h1 className="display-4 fw-bold">Brazil Investment Hub</h1>
                <p className="lead">Invierte en Rio de Janeiro con seguridad, facilidad y rentabilidad</p>
                <a href="#contact" className="btn-oranges mt-4">Contáctanos</a>

            </div>
        </section>
    );
};

export default Hero;