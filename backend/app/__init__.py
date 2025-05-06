from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from config.settings import Config
from app.extensions import db, ma

# Inicializamos extensiones globales (sin vincular aún a app)
db = SQLAlchemy()
ma = Marshmallow()

def create_app():
    app = Flask(__name__, instance_relative_config=True)

    # Configuración desde objeto Config
    app.config.from_object(Config)

    # CORS para permitir peticiones del frontend
    CORS(app)

    # Inicialización de extensiones con la app
    db.init_app(app)
    ma.init_app(app)

    # Importar y registrar Blueprints dentro del contexto de la app
    from app.routes.projects import project_bp

    from app.routes.contact import contact_bp

    app.register_blueprint(project_bp, url_prefix="/api/proyectos")
    app.register_blueprint(contact_bp, url_prefix="/api/contacto")

    return app
