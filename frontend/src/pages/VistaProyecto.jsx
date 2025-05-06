// src/pages/VistaProyecto.jsx
import React from "react";
import { useParams } from "react-router-dom";
import proyectos from "../data/proyectos";
import ProyectoDetalle from "../components/ProyectoDetalle";

const VistaProyecto = () => {
  const { id } = useParams();
  const proyecto = proyectos[id]; // ✅ Esto sí funciona porque `proyectos` es un objeto cuyas claves son los IDs


  if (!proyecto) {
    return (
      <div className="container py-5 text-center">
        <h2>Proyecto no encontrado</h2>
        <p>El proyecto que estás buscando no existe o fue eliminado.</p>
      </div>
    );
  }

  return <ProyectoDetalle {...proyecto} />;
};

export default VistaProyecto;
