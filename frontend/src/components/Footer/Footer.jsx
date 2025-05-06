import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => (
	<footer className="footer-modern text-white pt-5 pb-3 mt-5 text-center">
      <div className="container">
        <div className="mb-4 d-flex justify-content-center gap-3">
          <a
            href="https://www.instagram.com/brazilinvestmenthub/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/106888839/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:brazilinvestmenthub@gmail.com"
            className="footer-icon"
          >
            <FaEnvelope />
          </a>
        </div>

        <small className="footer-text">
        © {new Date().getFullYear()} Brazil Investment Hub · Desarrollado por{" "}
        <a
            href="https://www.linkedin.com/in/jpedro-rivero-pe%C3%B1a/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
        >
            Pedro Rivero Peña
        </a>
        </small>

      </div>
    </footer>
);

export default Footer;