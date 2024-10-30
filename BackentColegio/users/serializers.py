from rest_framework import serializers
from .models import Niveles, Roles, Materias, Maestros, Estudiantes, Usuarios, Cursos, InscripcionesCursos, Notas, Asistencia

class NivelesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Niveles
        fields = '__all__'


class RolesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roles
        fields = '__all__'


class MateriasSerializer(serializers.ModelSerializer):
    nivel = NivelesSerializer(read_only=True)

    class Meta:
        model = Materias
        fields = '__all__'


class MaestrosSerializer(serializers.ModelSerializer):
    materia = MateriasSerializer(read_only=True)
    id_rol = RolesSerializer(read_only=True)

    class Meta:
        model = Maestros
        fields = '__all__'


class EstudiantesSerializer(serializers.ModelSerializer):
    nivel = NivelesSerializer(read_only=True)
    id_rol = RolesSerializer(read_only=True)

    class Meta:
        model = Estudiantes
        fields = '__all__'


class UsuariosSerializer(serializers.ModelSerializer):
    id_rol = RolesSerializer(read_only=True)

    class Meta:
        model = Usuarios
        fields = '__all__'


class CursosSerializer(serializers.ModelSerializer):
    nivel = NivelesSerializer(read_only=True)
    maestro_responsable = MaestrosSerializer(read_only=True)

    class Meta:
        model = Cursos
        fields = '__all__'


class InscripcionesCursosSerializer(serializers.ModelSerializer):
    id_estudiante = EstudiantesSerializer(read_only=True)
    id_curso = CursosSerializer(read_only=True)

    class Meta:
        model = InscripcionesCursos
        fields = '__all__'


class NotasSerializer(serializers.ModelSerializer):
    id_estudiante = EstudiantesSerializer(read_only=True)
    id_curso = CursosSerializer(read_only=True)
    id_materia = MateriasSerializer(read_only=True)

    class Meta:
        model = Notas
        fields = '__all__'


class AsistenciaSerializer(serializers.ModelSerializer):
    id_estudiante = EstudiantesSerializer(read_only=True)

    class Meta:
        model = Asistencia
        fields = '__all__'