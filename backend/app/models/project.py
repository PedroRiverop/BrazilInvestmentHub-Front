
from app.extensions import db

class Proyecto(db.Model):
    __tablename__ = "proyectos"

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    descripcion_destacada = db.Column(db.Text, nullable=True)
    descripcion_caratula = db.Column(db.Text, nullable=True)
    caratula = db.Column(db.String(255), nullable=True)
    fachada = db.Column(db.String(255), nullable=True)
    imagenes_carrusel = db.Column(db.JSON, nullable=True)
    descripcion_masterplan = db.Column(db.Text, nullable=True)
    galeria_complementaria = db.Column(db.JSON, nullable=True)
    amenidades = db.Column(db.JSON, nullable=True)
    ubicacion_imagen = db.Column(db.String(255), nullable=True)
    ubicacion_link = db.Column(db.String(255), nullable=True)
    tipologias = db.Column(db.JSON, nullable=True)
    fondo_masterplan = db.Column(db.String(255), nullable=True)
    datos_destacados = db.Column(db.JSON, nullable=True)
    texto_final = db.Column(db.Text, nullable=True)

    def __repr__(self):
        return f"<Proyecto {self.nombre}>"

