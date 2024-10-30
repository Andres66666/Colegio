# Create your models here.
from django.db import models

class Niveles(models.Model):
    id_nivel = models.AutoField(primary_key=True)
    nombre_nivel = models.CharField(max_length=255, unique=True)
    estado_niveles = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre_nivel


class Roles(models.Model):
    id_rol = models.AutoField(primary_key=True)
    nombre_rol = models.CharField(max_length=255, unique=True)
    estado_Rol = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre_rol


class Materias(models.Model):
    id_materia = models.AutoField(primary_key=True)
    nombre_materia = models.CharField(max_length=255)
    nivel = models.ForeignKey(Niveles, on_delete=models.CASCADE)
    estado_materias = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre_materia


class Maestros(models.Model):
    id_maestro = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=255)
    apellido = models.CharField(max_length=255)
    materia = models.ForeignKey(Materias, on_delete=models.CASCADE)
    id_rol = models.ForeignKey(Roles, on_delete=models.CASCADE)
    estado_maestro = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.nombre} {self.apellido}"


class Estudiantes(models.Model):
    id_estudiante = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=255)
    apellido = models.CharField(max_length=255)
    nivel = models.ForeignKey(Niveles, on_delete=models.CASCADE)
    id_rol = models.ForeignKey(Roles, on_delete=models.CASCADE)
    estado_estudiante = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.nombre} {self.apellido}"


class Usuarios(models.Model):
    id_usuario = models.AutoField(primary_key=True)
    usuario = models.CharField(max_length=255, unique=True)
    contrasena = models.CharField(max_length=255)
    id_rol = models.ForeignKey(Roles, on_delete=models.CASCADE)
    estado_usuario = models.BooleanField(default=True)

    def __str__(self):
        return self.usuario


class Cursos(models.Model):
    COLOR_CHOICES = [
        ('Rojo', 'Rojo'),
        ('Azul', 'Azul'),
        ('Blanco', 'Blanco'),
    ]

    id_curso = models.AutoField(primary_key=True)
    nombre_curso = models.CharField(max_length=255)
    descripcion = models.TextField()
    nivel = models.ForeignKey(Niveles, on_delete=models.CASCADE)
    color_curso = models.CharField(max_length=20, choices=COLOR_CHOICES)
    maestro_responsable = models.ForeignKey(Maestros, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre_curso


class InscripcionesCursos(models.Model):
    id_inscripcion = models.AutoField(primary_key=True)
    id_estudiante = models.ForeignKey(Estudiantes, on_delete=models.CASCADE)
    id_curso = models.ForeignKey(Cursos, on_delete=models.CASCADE)
    fecha_inscripcion = models.DateField()

    def __str__(self):
        return f"Inscripción de {self.id_estudiante} en {self.id_curso}"


class Notas(models.Model):
    id_nota = models.AutoField(primary_key=True)
    id_estudiante = models.ForeignKey(Estudiantes, on_delete=models.CASCADE)
    id_curso = models.ForeignKey(Cursos, on_delete=models.CASCADE)
    id_materia = models.ForeignKey(Materias, on_delete=models.CASCADE)
    nota = models.FloatField()
    fecha = models.DateField()

    def __str__(self):
        return f"Nota de {self.id_estudiante} en {self.id_curso}"

class Asistencia(models.Model):
    id_asistencia = models.AutoField(primary_key=True)
    id_estudiante = models.ForeignKey(Estudiantes, on_delete=models.CASCADE)
    fecha = models.DateField()
    lunes = models.CharField(max_length=10, default='Ausente', choices=[('Presente', 'Presente'), ('Ausente', 'Ausente')])
    martes = models.CharField(max_length=10, default='Ausente', choices=[('Presente', 'Presente'), ('Ausente', 'Ausente')])
    miercoles = models.CharField(max_length=10, default='Ausente', choices=[('Presente', 'Presente'), ('Ausente', 'Ausente')])
    jueves = models.CharField(max_length=10, default='Ausente', choices=[('Presente', 'Presente'), ('Ausente', 'Ausente')])
    viernes = models.CharField(max_length=10, default='Ausente', choices=[('Presente', 'Presente'), ('Ausente', 'Ausente')])

    class Meta:
        unique_together = ('id_estudiante', 'fecha')  # Asegura que no haya duplicados para un estudiante en una fecha

    def __str__(self):
        return f"Asistencia de {self.id_estudiante} en {self.fecha}"