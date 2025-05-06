import React from "react";
import { FaComments, FaBuilding, FaTools } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="section-space bg-light text-center py-5">
      <div className="container">
      <h2 className="mb-4">Nuestros Servicios</h2>
        <p className="lead mb-5">
          Te acompañamos en cada etapa del proceso de inversión, brindando seguridad, transparencia y confianza.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="service-card">
              <div className="service-icon">
                <FaComments />
              </div>
              <h5 className="mt-3">Asesoramiento Personalizado</h5>
              <p>Te guiamos en cada paso para tomar decisiones estratégicas de inversión.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="service-card">
              <div className="service-icon">
                <FaBuilding />
              </div>
              <h5 className="mt-3">Acceso a Proyectos Exclusivos</h5>
              <p>Conectamos inversores con desarrollos únicos y de alto rendimiento.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="service-card">
              <div className="service-icon">
                <FaTools />
              </div>
              <h5 className="mt-3">Gestión Integral</h5>
              <p>Administración, seguimiento legal y soporte post-inversión.</p>
            </div>
          </div>
        </div>
        <p className="lead mb-5">
        En Brazil Investment Hub, transformamos oportunidades en inversiones sólidas, abriendo las puertas del mercado 
        brasileño a inversores que buscan crecimiento, diversificación y alta valorización.
        </p>
      </div>
    </section>
  );
};

export default Services;