# backend/app/routes/projects.py

from flask import Blueprint, jsonify
from app.models.project import Proyecto  # Asegúrate de que esta ruta sea válida
from app.extensions import db

project_bp = Blueprint("projects", __name__)

@project_bp.route("/", methods=["GET"])
def listar_proyectos():
    proyectos = Proyecto.query.all()
    return jsonify([{
        "id": proyecto.id,
        "nombre": proyecto.nombre,
        "descripcion": proyecto.descripcion_destacada
    } for proyecto in proyectos])
