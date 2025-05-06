from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class VisitanteCreate(BaseModel):
    nombre: str
    email: EmailStr
    telefono: Optional[str] = None
    mensaje: str

class VisitanteResponse(BaseModel):
    id: int
    nombre: str
    email: EmailStr
    telefono: Optional[str] = None
    mensaje: str
    fecha_envio: datetime

    class Config:
        orm_mode = True
