// src/components/Projects.jsx
import React from "react";
import { Link } from "react-router-dom";
import proyectos from "../../data/proyectos";

const Projects = () => {
  return (
    <section id="projects" className="section-space container text-center">
      <h2 className="mb-4">Proyectos</h2>
      <p className="lead mb-4">
        Descubrí nuestros proyectos actuales y en desarrollo
      </p>
      <div className="row">
        {Object.entries(proyectos).map(([id, proyecto]) => (
          <div className="col-md-4 mb-4" key={id}>
            <div className="project-card position-relative overflow-hidden rounded-4 shadow-sm">
              <img
                src={proyecto.caratula}
                className="img-fluid project-image"
                alt={`fachada ${proyecto.nombre}`}
              />
              <div className="project-overlay d-flex flex-column justify-content-center align-items-center">
                <h5 className="text-white text-center">{proyecto.nombre}</h5>
                <Link
                  to={`/proyecto/${id}`}
                  className="btn btn-outline-light btn-sm mt-2"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
            <p className="project-description mt-3 text-center fw-medium text-dark">
              {proyecto.descripcionDestacada?.slice(0, 80)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

