import React from "react";
import { FaLightbulb, FaMapMarkedAlt, FaHandshake } from "react-icons/fa";
import "./About.css";
import about1 from "../../assets/img/About1.png"

const About = () => {
  return (
    <section id="about" className="section-space bg-light py-5">
      <div className="container d-flex flex-column flex-md-row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
          <img src={about1} alt="nosotros" className="img-fluid rounded-4 shadow" />
        </div>
        <div className="col-md-6 ps-md-5" data-aos="fade-left">
          <h2 className="mb-3">¿Quiénes Somos?</h2>
          <p className="lead text-justify">
            <strong>Brazil Investment Hub</strong> es una empresa con sede en Rio de Janeiro, especializada en la venta de
            inmuebles y consultoría para inversores de habla hispana. Conectamos a nuestros clientes con las mejores
            oportunidades del mercado carioca, ofreciendo asesoramiento estratégico, conocimiento local y
            un acompañamiento integral y confiable.
          </p>

          <div className="d-flex gap-4 mt-4 justify-content-center">
            <div className="text-center">
              <FaLightbulb className="fs-2 text-orange" />
              <p className="fw-semibold mt-2">Asesoría Estratégica</p>
            </div>
            <div className="text-center">
              <FaMapMarkedAlt className="fs-2 text-orange" />
              <p className="fw-semibold mt-2">Acceso Local Premium</p>
            </div>
            <div className="text-center">
              <FaHandshake className="fs-2 text-orange" />
              <p className="fw-semibold mt-2">Confianza Internacional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;