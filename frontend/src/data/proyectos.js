// src/data/proyectos.js
const imagenes = import.meta.glob('/src/assets/img/**/*.{jpg,jpeg,png}', { eager: true });

function getImg(path) {
  return imagenes[`/src/assets/img/${path}`]?.default || "";
}

const proyectos = {
  "be-in-rio": {
    nombre: "Be in Rio",
    caratula: getImg("project1/project1.png"),
    descripcionDestacada: "Aquí, lo mejor de la Zona Sur de Rio se encuentra con un estilo de vida auténtico y vibrante. La Colección Be.in.Rio te permite vivir la esencia carioca...",
    descripcionCaratula: "Oportunidades de ubicación estratégica en Ipanema y Copacabana.",
    fachada: getImg("project1/fachada.png"),
    imagenesCarrusel: [
      getImg("project1/beInRio1.png"),
      getImg("project1/beInRio2.png"),
      getImg("project1/beInRio3.png"),
      getImg("project1/beInRio4.png")
    ],
    descripcionMasterplan: "Be.in.Rio Playa de Ipanema combina confort, diseño contemporáneo y funcionalidad en un espacio donde cada detalle ha sido pensado para armonizar elegancia y autenticidad...",
    galeriaComplementaria: [
      getImg("project1/area1.png"),
      getImg("project1/area2.png"),
      getImg("project1/area3.png"),
      getImg("project1/area4.png"),
      getImg("project1/area5.png"),
      getImg("project1/area6.png")
    ],
    amenidades: ["gimnasio", "piscina", "lavanderia"],
    ubicacion: {
      imagen: getImg("project1/ubicacion.png"),
      link: "https://maps.app.goo.gl/xidbvmthe3c8Jprw6?g_st=com.google.maps.preview.copy"
    },
    tipologias: [
      {
        nombre: "Studio",
        descripcion: "Un encantador studio en Ipanema, diseñado para ofrecer confort y funcionalidad...",
        planoImg: ""
      },
      {
        nombre: "Double Suite",
        descripcion: "Una elegante double suite en Ipanema, diseñada para ofrecer confort y practicidad..."
      },
      {
        nombre: "Penthouse",
        descripcion: "Una exclusiva penthouse de 3 habitaciones en Ipanema, donde sofisticación y amplitud se combinan..."
      }
    ],
    fondoMasterplan: getImg("project1/masterplan.png"),
    datosDestacados: ["8 pisos", "33 unidades", "7 amenities"],
    textoFinal: "En Brazil Investment Hub, conectamos inversores con oportunidades exclusivas en el mercado inmobiliario de Río de Janeiro..."
  },

  "cidade-arte": {
    nombre: "Cidade Arte",
    caratula: getImg("project2/project2.png"),
    descripcionDestacada: "Cidade Arte es un barrio innovador, diseñado para ofrecer eficiencia, sostenibilidad y alta calidad de vida...",
    descripcionCaratula: "Oportunidades de ubicación estratégica en Ipanema y Copacabana.",
    fachada: getImg("project2/fachada.jpg"),
    imagenesCarrusel: [
      getImg("project2/ca1.jpg"),
      getImg("project2/ca2.jpg"),
      getImg("project2/ca3.jpg"),
      getImg("project2/ca4.jpg")
    ],
    descripcionMasterplan: "Cidade Arte cuenta con infraestructura completa de alto nivel y un concepto de planificación estratégica, amenidades para adultos e niños y facilidades para el dia a dia...",
    galeriaComplementaria: [
      getImg("project2/area1.jpg"),
      getImg("project2/area2.jpg"),
      getImg("project2/area3.png"),
      getImg("project2/area4.jpg"),
      getImg("project2/area5.jpg"),
      getImg("project2/area6.jpg"),
      getImg("project2/area7.jpg")
    ],
    amenidades: ["piscina", "cowork", "spa", "churrasqueira", "gimnasio", "playground", "piscina de surf"],
    ubicacion: {
      imagen: getImg("project2/ubicacion.png"),
      link: "https://maps.app.goo.gl/fuB4JyxDcPPusE2g8?g_st=com.google.maps.preview.copy"
    },
    tipologias: [
      {
        nombre: "",
        descripcion: "",
        planoImg: getImg("project2/tipologia1.png")
      },
      {
        nombre: "",
        descripcion: "",
        planoImg: getImg("project2/tipologia2.png")
      },
      {
        nombre: "",
        descripcion: "",
        planoImg: getImg("project2/tipologia3.png")
      },
      {
        nombre: "",
        descripcion: "",
        planoImg: getImg("project2/tipologia4.png")
      },
      {
        nombre: "",
        descripcion: "",
        planoImg: getImg("project2/tipologia5.png")
      },
      {
        nombre: "",
        descripcion: "",
        planoImg: getImg("project2/tipologia6.png")
      }
    ],
    fondoMasterplan: getImg("project2/masterplan.jpg"),
    datosDestacados: ["14 pisos", "32 unidades", "20 + amenities"],
    textoFinal: "En Brazil Investment Hub, conectamos inversores con oportunidades exclusivas en el mercado inmobiliario de Río de Janeiro..."
  },

  "ora": {
    nombre: "ORA",
    caratula: getImg("project3/project3.png"),
    descripcionDestacada: "Imagina vivir o invertir en un lugar con vistas a nueve postales icónicas: la Bahía de Guanabara, el Pan de Azúcar, el Cristo Redentor, los Arcos de Lapa y mucho más. Todo desde tu balcón, la piscina del rooftop o tomando algo con amigos en el bar. Perfecto para invertir, porque en ORA, la vista es un privilegio y la ubicación, inmejorable...",
    descripcionCaratula: "Oportunidades de ubicación estratégica en Ipanema y Copacabana.",
    fachada: getImg("project3/fachada.jpg"),
    imagenesCarrusel: [
      getImg("project3/ora1.png"),
      getImg("project3/ora2.png"),
      getImg("project3/ora3.png")
    ],
    descripcionMasterplan: "OORA cuenta con infraestructura completa para recibir a sus visitantes, disfruta de la maravillosa vista desde el rooftop en la piscina y aprovecha todo lo que ORA tiene para ofrecerte...",
    galeriaComplementaria: [
      getImg("project3/area1.png"),
      getImg("project3/area2.png"),
      getImg("project3/area3.png"),
      getImg("project3/area4.png"),
      getImg("project3/area5.png")
    ],
    amenidades: ["piscina", "cowork", "gimnasio", "sala de juegos", "bar", "solarium", "lavanderia"],
    ubicacion: {
      imagen: getImg("project3/ubicacion.jpg"),
      link: "https://maps.app.goo.gl/eXJrStDD8LV2mcaJ8?g_st=com.google.maps.preview.copy"
    },
    tipologias: [
      {
        nombre: "",
        descripcion: "",
        planoImg: ""
      },
      {
        nombre: "",
        descripcion: ""
      }
    ],
    fondoMasterplan: getImg("project2/masterplan.jpg"),
    datosDestacados: ["16 pisos", "13 unidades", "9 amenities"],
    textoFinal: "En Brazil Investment Hub, conectamos inversores con oportunidades exclusivas en el mercado inmobiliario de Río de Janeiro..."
  }
};

export default proyectos;
