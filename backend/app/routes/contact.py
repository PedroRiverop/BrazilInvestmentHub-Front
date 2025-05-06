from flask import Blueprint, request, jsonify
from app.models.visitante import Visitante
from app.schemas.visitor import VisitanteCreate
from app.extensions import db
from datetime import datetime

contact_bp = Blueprint("contact", __name__, url_prefix="/api/contact")

@contact_bp.route("/", methods=["POST"])
def recibir_contacto():
    try:
        data = request.get_json()
        visitante_data = VisitanteCreate(**data)  # Validación con Pydantic

        visitante = Visitante(
            nombre=visitante_data.nombre,
            email=visitante_data.email,
            telefono=visitante_data.telefono,
            mensaje=visitante_data.mensaje,
            fecha_envio=datetime.utcnow(),
        )

        db.session.add(visitante)
        db.session.commit()

        return jsonify({"message": "Formulario recibido correctamente"}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 400
