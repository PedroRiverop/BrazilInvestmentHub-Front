
from datetime import datetime
from app.extensions import db

class Visitante(db.Model):
    __tablename__ = "visitantes"

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    telefono = db.Column(db.String(20), nullable=True)
    mensaje = db.Column(db.String(1000), nullable=False)
    fecha_envio = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<Visitante {self.nombre}>"
