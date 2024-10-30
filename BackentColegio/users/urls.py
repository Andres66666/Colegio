from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    NivelesViewSet,
    RolesViewSet,
    MateriasViewSet,
    MaestrosViewSet,
    EstudiantesViewSet,
    UsuariosViewSet,
    CursosViewSet,
    InscripcionesCursosViewSet,
    NotasViewSet,
    AsistenciaViewSet
)

router = DefaultRouter()
router.register(r'niveles', NivelesViewSet)
router.register(r'roles', RolesViewSet)
router.register(r'materias', MateriasViewSet)
router.register(r'maestros', MaestrosViewSet)
router.register(r'estudiantes', EstudiantesViewSet)
router.register(r'usuarios', UsuariosViewSet)
router.register(r'cursos', CursosViewSet)
router.register(r'inscripciones-cursos', InscripcionesCursosViewSet)
router.register(r'notas', NotasViewSet)
router.register(r'asistencia', AsistenciaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]