import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./BotonWhatsappFlotante.css";

const BotonWhatsappFlotante = () => {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerPoint = window.innerHeight / 2;

      if (scrollTop > triggerPoint && !mostrarMensaje) {
        setMostrarMensaje(true);
        setTimeout(() => setMostrarMensaje(false), 5000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mostrarMensaje]);

  return (
    <>
      {mostrarMensaje && (
        <a
          href="https://wa.me/message/RKUT54QVSILGB1"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-mensaje-popup text-decoration-none"
        >
          <p>
            ¿Tenés dudas? <strong>¡Hablemos por WhatsApp!</strong>
          </p>
        </a>
      )}

      <a
        href="https://wa.me/message/RKUT54QVSILGB1"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-flotante"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="¿Tenés dudas? ¡Hablemos por WhatsApp!"
      >
        <div className="whatsapp-animado d-flex align-items-center justify-content-center">
          <FaWhatsapp className="fa-lg" />
        </div>
      </a>
    </>
  );
};

export default BotonWhatsappFlotante;