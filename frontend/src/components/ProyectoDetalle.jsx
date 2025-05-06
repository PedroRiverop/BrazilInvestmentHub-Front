import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaSwimmer, FaDumbbell, FaHotTub, FaUtensils, FaWifi, FaBuilding, FaBriefcase, FaFutbol, FaGamepad, FaCocktail, FaSun   } from "react-icons/fa";
import { GiTennisCourt, GiWaveSurfer } from "react-icons/gi";
import { Carousel } from "react-bootstrap";
import Contact from "./Contact/Contact.jsx";
import "./ProyectoDetalle.css";
import Slider from "react-slick";
import ModalImage from "react-modal-image";
import BotonWhatsappFlotante from "./BtnWhatsapp/BotonWhatsappFlotante";



const amenityIcons = {
    piscina: <FaSwimmer />,
    "piscina de surf": <GiWaveSurfer />,
    gimnasio: <FaDumbbell />,
    spa: <FaHotTub />,
    churrasqueira: <FaUtensils />,
    cowork: <FaBriefcase />,
    wifi: <FaWifi />,
    lavanderia: <FaBuilding />,
    ubicacion: <FaMapMarkerAlt />,
    "cancha de futbol": <FaFutbol />,
    "cancha de tenis": <GiTennisCourt />,
    "sala de juegos": <FaGamepad />,
    bar: <FaCocktail />,
    solarium: <FaSun />
};




const ProyectoDetalle = ({
    nombre,
    descripcionDestacada,
    fachada,
    imagenesCarrusel = [],
    descripcionMasterplan,
    galeriaComplementaria = [],
    amenidades = [],
    ubicacion,
    tipologias = [],
    textoFinal,
    fondoMasterplan,
    datosDestacados = [],
}) => {

    const [mostrarMensaje, setMostrarMensaje] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const triggerPoint = window.innerHeight / 2;

            if (scrollTop > triggerPoint) {
                setMostrarMensaje(true);
                setTimeout(() => setMostrarMensaje(false), 5000);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className="proyecto-detalle">
            {/* Carrusel principal */}
            <Carousel fade className="hero-carousel">
                {imagenesCarrusel.map((img, i) => (
                    <Carousel.Item key={i}>
                        <img className="d-block w-100" src={img} alt={`Slide ${i}`} />
                    </Carousel.Item>
                ))}
            </Carousel>

            {/* Descripción destacada */}
            <section className="destacada container py-5 d-flex flex-column flex-md-row align-items-center">
                <div className="col-md-6 pe-md-5 text-container-fachada">
                    <h2 className="text-orange mb-3 animate-text-shadow">{nombre}</h2>
                    <p className="lead text-justify animate-fadein">{descripcionDestacada}</p>
                </div>
                <div className="col-md-6">
                    <img
                        src={fachada}
                        alt="fachada"
                        className="img-fluid rounded-4 shadow fachada-zoom"
                    />
                </div>

            </section>

            {/* Masterplan / descripción */}
            <section
                className="seccion-masterplan text-white py-5"
                style={{
                    backgroundImage: fondoMasterplan ? `url(${fondoMasterplan})` : "none",
                    backgroundColor: fondoMasterplan ? "transparent" : "#bafefe",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                }}
            >
                <div className="overlay-masterplan"></div>
                <div className="container text-center position-relative z-2">
                    <div className="datos-destacados mb-4 d-flex flex-wrap justify-content-center gap-3">
                        {datosDestacados.map((item, i) => (
                            <div key={i} className="dato-box p-3 px-4">
                                <h4 className="mb-0 fw-bold">{item}</h4>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <section className="descripcion container py-4">
                <p className="lead text-justify text-masterplan">{descripcionMasterplan}</p>
            </section>

            {/* Galería complementaria */}
            <section className="galeria container py-5">
                <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={3}
                    slidesToScroll={1}
                    responsive={[
                        {
                            breakpoint: 992,
                            settings: { slidesToShow: 2 },
                        },
                        {
                            breakpoint: 768,
                            settings: { slidesToShow: 1 },
                        },
                    ]}
                >
                    {galeriaComplementaria.map((img, i) => (
                        <div key={i} className="px-2">
                            <img
                                src={img}
                                alt={`galeria-${i}`}
                                className="img-fluid rounded-3 shadow-sm ambiente-slider"
                            />
                        </div>
                    ))}
                </Slider>
            </section>


            {/* Amenities */}
            <section className="amenities container py-5">

                <div className="d-flex flex-wrap gap-4 justify-content-center">
                    {amenidades.map((am, i) => (
                        <div className="text-center text-orange" key={i}>
                            <div className="icon-circle mb-2">{amenityIcons[am] || <FaBuilding />}</div>
                            <div className="fw-semibold text-capitalize">{am}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ubicación */}
            <section className="ubicacion container py-5 text-center">
                <h4 className="text-orange mb-3">Ubicación estratégica</h4>
                <p className="text-muted mb-4">Donde todo está a tu alcance: gastronomía, comercio y transporte</p>
                <a href={ubicacion.link} target="_blank" rel="noopener noreferrer">
                    <img src={ubicacion.imagen} alt="ubicacion" className="img-fluid rounded-3 shadow" />
                </a>
            </section>

            {/* Tipologías */}
            <section className="tipologias container py-3">

                <div className="row">
                    {tipologias.map((tipo, i) => (
                        <div className="col-md-6 mb-4" key={i}>
                            <div className="d-flex flex-column flex-md-row align-items-center text-centergap-4">
                                <div className="tipologiaText">
                                    <h5 className="fw-bold text-orange">{tipo.nombre}</h5>
                                    <p className="text-tipologia">{tipo.descripcion}</p>
                                </div>
                                {tipo.planoImg && (
                                    <div className="tipologiaMap">
                                        <ModalImage
                                            small={tipo.planoImg}
                                            large={tipo.planoImg}
                                            alt={`Plano ${tipo.nombre}`}
                                            hideDownload
                                            hideZoom
                                            className="rounded shadow-sm"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* Cierre + Formulario */}
            <section className="formulario container py-3">
                <p className="text-center mb-4 text-contacto-final">
                    {textoFinal}
                </p>
                <Contact />
            </section>

            <BotonWhatsappFlotante />


        </div>
    );
};

export default ProyectoDetalle;