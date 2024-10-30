from django.urls import path
from .views import (
    NivelesListCreateView,
    NivelesRetrieveUpdateDestroyView,
    RolesListCreateView,
    RolesRetrieveUpdateDestroyView,
    MateriasListCreateView,
    MateriasRetrieveUpdateDestroyView,
    MaestrosListCreateView,
    MaestrosRetrieveUpdateDestroyView,
    EstudiantesListCreateView,
    EstudiantesRetrieveUpdateDestroyView,
    UsuariosListCreateView,
    UsuariosRetrieveUpdateDestroyView,
    CursosListCreateView,
    CursosRetrieveUpdateDestroyView,
    InscripcionesCursosListCreateView,
    InscripcionesCursosRetrieveUpdateDestroyView,
    NotasListCreateView,
    NotasRetrieveUpdateDestroyView,
    AsistenciaListCreateView,
    AsistenciaRetrieveUpdateDestroyView,
)

urlpatterns = [
    # Niveles URLs
    path('niveles/', NivelesListCreateView.as_view(), name='niveles-list-create'),
    path('niveles/<int:pk>/', NivelesRetrieveUpdateDestroyView.as_view(), name='niveles-detail'),

    # Roles URLs
    path('roles/', RolesListCreateView.as_view(), name='roles-list-create'),
    path('roles/<int:pk>/', RolesRetrieveUpdateDestroyView.as_view(), name='roles-detail'),

    # Materias URLs
    path('materias/', MateriasListCreateView.as_view(), name='materias-list-create'),
    path('materias/<int:pk>/', MateriasRetrieveUpdateDestroyView.as_view(), name='materias-detail'),

    # Maestros URLs
    path('maestros/', MaestrosListCreateView.as_view(), name='maestros-list-create'),
    path('maestros/<int:pk>/', MaestrosRetrieveUpdateDestroyView.as_view(), name='maestros-detail'),

    # Estudiantes URLs
    path('estudiantes/', EstudiantesListCreateView.as_view(), name='estudiantes-list-create'),
    path('estudiantes/<int:pk>/', EstudiantesRetrieveUpdateDestroyView.as_view(), name='estudiantes-detail'),

    # Usuarios URLs
    path('usuarios/', UsuariosListCreateView.as_view(), name='usuarios-list-create'),
    path('usuarios/<int:pk>/', UsuariosRetrieveUpdateDestroyView.as_view(), name='usuarios-detail'),

    # Cursos URLs
    path('cursos/', CursosListCreateView.as_view(), name='cursos-list-create'),
    path('cursos/<int:pk>/', CursosRetrieveUpdateDestroyView.as_view(), name='cursos-detail'),

    # Inscripciones Cursos URLs
    path('inscripciones/', InscripcionesCursosListCreateView.as_view(), name='inscripciones-list-create'),
    path('inscripciones/<int:pk>/', InscripcionesCursosRetrieveUpdateDestroyView.as_view(), name='inscripciones-detail'),

    # Notas URLs
    path('notas/', NotasListCreateView.as_view(), name='notas-list-create'),
    path('notas/<int:pk>/', NotasRetrieveUpdateDestroyView.as_view(), name='notas-detail'),

    # Asistencia URLs
    path('asistencia/', AsistenciaListCreateView.as_view(), name='asistencia-list-create'),
    path('asistencia/<int:pk>/', AsistenciaRetrieveUpdateDestroyView.as_view(), name='asistencia-detail'),
]