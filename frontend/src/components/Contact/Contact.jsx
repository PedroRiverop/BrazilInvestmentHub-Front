import React, { useState } from "react";
import "./Contact.css";
import { FaCheckCircle } from "react-icons/fa";
import axios from "../../axiosInstance";

const Contact = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);

    try {
      const res = await axios.post("/api/api/contacto", form);
      if (res.status === 201) {
        setEnviado(true);
        setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
        setTimeout(() => setEnviado(false), 4000);
      }
    } catch (err) {
      console.error("Error al enviar el formulario:", err);
      alert("Hubo un error al enviar el formulario.");
    } finally {
      setCargando(false);
    }
  };


  return (
    <section id="contact" className="section-space bg-light py-5">
      <div className="container text-center">
        <h2 className="mb-4 text-orange">¿Querés que te contactemos?</h2>

        {enviado ? (
          <div className="contact-confirmation">
            <FaCheckCircle className="text-success fs-1 mb-3" />
            <h5>¡Gracias por tu mensaje!</h5>
            <p>Nos pondremos en contacto contigo muy pronto.</p>
          </div>
        ) : (
          <form className="contact-form mx-auto" onSubmit={handleSubmit}>
            <div className="mb-3 text-start">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label className="form-label">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label className="form-label">Teléfono</label>
              <input
                type="tel"
                className="form-control"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label className="form-label">Mensaje</label>
              <textarea
                className="form-control"
                name="mensaje"
                rows="4"
                value={form.mensaje}
                onChange={handleChange}
                required
              />
            </div>
            <div className="text-end">
              <button type="submit" className="btn-orange" disabled={cargando}>
                {cargando ? (
                  <span className="spinner-border spinner-border-sm me-2" role="status" />
                ) : null}
                {cargando ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;