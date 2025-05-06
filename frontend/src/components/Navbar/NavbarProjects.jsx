import React from "react";
import { Link } from "react-router-dom";
import proyectos from "../../data/proyectos";
import logo from "../../assets/img/logoBlanco.png"; // Ajustá la ruta si es necesario

const NavbarProjects = () => {
  return (
    <nav className="navbar navbar-project navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" height="50" className="me-2" />
        </Link>

        <div className="d-flex gap-3">
          {Object.entries(proyectos).map(([id, proyecto]) => (
            <Link
              key={id}
              className="nav-link text-white"
              to={`/proyecto/${id}`}
            >
              {proyecto.nombre}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavbarProjects;
