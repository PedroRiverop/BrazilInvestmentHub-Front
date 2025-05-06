# backend/init_db.py

from app import create_app
from app.extensions import db
from app.models.project import Proyecto
from app.models.visitante import Visitante

app = create_app()

with app.app_context():
    db.create_all()
    print("✅ Base de datos inicializada correctamente.")


Disculpas Patricia, debido a problemas energeticos en la zona no podre conectarme el día de hoy.