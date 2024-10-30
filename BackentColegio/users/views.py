from rest_framework import generics
from .models import Niveles, Roles, Materias, Maestros, Estudiantes, Usuarios, Cursos, InscripcionesCursos, Notas, Asistencia
from .serializers import (
    NivelesSerializer,
    RolesSerializer,
    MateriasSerializer,
    MaestrosSerializer,
    EstudiantesSerializer,
    UsuariosSerializer,
    CursosSerializer,
    InscripcionesCursosSerializer,
    NotasSerializer,
    AsistenciaSerializer
)

class NivelesListCreateView(generics.ListCreateAPIView):
    queryset = Niveles.objects.all()
    serializer_class = NivelesSerializer


class NivelesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Niveles.objects.all()
    serializer_class = NivelesSerializer

class RolesListCreateView(generics.ListCreateAPIView):
    queryset = Roles.objects.all()
    serializer_class = RolesSerializer


class RolesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Roles.objects.all()
    serializer_class = RolesSerializer

class MateriasListCreateView(generics.ListCreateAPIView):
    queryset = Materias.objects.all()
    serializer_class = MateriasSerializer

class MateriasRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Materias.objects.all()
    serializer_class = MateriasSerializer

class MaestrosListCreateView(generics.ListCreateAPIView):
    queryset = Maestros.objects.all()
    serializer_class = MaestrosSerializer


class MaestrosRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Maestros.objects.all()
    serializer_class = MaestrosSerializer

class EstudiantesListCreateView(generics.ListCreateAPIView):
    queryset = Estudiantes.objects.all()
    serializer_class = EstudiantesSerializer


class EstudiantesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Estudiantes.objects.all()
    serializer_class = EstudiantesSerializer

class UsuariosListCreateView(generics.ListCreateAPIView):
    queryset = Usuarios.objects.all()
    serializer_class = UsuariosSerializer


class UsuariosRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Usuarios.objects.all()
    serializer_class = UsuariosSerializer
