# Generated by Django 5.1.2 on 2024-10-29 23:26

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cursos',
            fields=[
                ('id_curso', models.AutoField(primary_key=True, serialize=False)),
                ('nombre_curso', models.CharField(max_length=255)),
                ('descripcion', models.TextField()),
                ('color_curso', models.CharField(choices=[('Rojo', 'Rojo'), ('Azul', 'Azul'), ('Blanco', 'Blanco')], max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Estudiantes',
            fields=[
                ('id_estudiante', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=255)),
                ('apellido', models.CharField(max_length=255)),
                ('estado_estudiante', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Maestros',
            fields=[
                ('id_maestro', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=255)),
                ('apellido', models.CharField(max_length=255)),
                ('estado_maestro', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Materias',
            fields=[
                ('id_materia', models.AutoField(primary_key=True, serialize=False)),
                ('nombre_materia', models.CharField(max_length=255)),
                ('estado_materias', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Niveles',
            fields=[
                ('id_nivel', models.AutoField(primary_key=True, serialize=False)),
                ('nombre_nivel', models.CharField(max_length=255, unique=True)),
                ('estado_niveles', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Roles',
            fields=[
                ('id_rol', models.AutoField(primary_key=True, serialize=False)),
                ('nombre_rol', models.CharField(max_length=255, unique=True)),
                ('estado_Rol', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='InscripcionesCursos',
            fields=[
                ('id_inscripcion', models.AutoField(primary_key=True, serialize=False)),
                ('fecha_inscripcion', models.DateField()),
                ('id_curso', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.cursos')),
                ('id_estudiante', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.estudiantes')),
            ],
        ),
        migrations.AddField(
            model_name='cursos',
            name='maestro_responsable',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.maestros'),
        ),
        migrations.AddField(
            model_name='maestros',
            name='materia',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.materias'),
        ),
        migrations.AddField(
            model_name='materias',
            name='nivel',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.niveles'),
        ),
        migrations.AddField(
            model_name='estudiantes',
            name='nivel',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.niveles'),
        ),
        migrations.AddField(
            model_name='cursos',
            name='nivel',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.niveles'),
        ),
        migrations.CreateModel(
            name='Notas',
            fields=[
                ('id_nota', models.AutoField(primary_key=True, serialize=False)),
                ('nota', models.FloatField()),
                ('fecha', models.DateField()),
                ('id_curso', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.cursos')),
                ('id_estudiante', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.estudiantes')),
                ('id_materia', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.materias')),
            ],
        ),
        migrations.AddField(
            model_name='maestros',
            name='id_rol',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.roles'),
        ),
        migrations.AddField(
            model_name='estudiantes',
            name='id_rol',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.roles'),
        ),
        migrations.CreateModel(
            name='Usuarios',
            fields=[
                ('id_usuario', models.AutoField(primary_key=True, serialize=False)),
                ('usuario', models.CharField(max_length=255, unique=True)),
                ('contrasena', models.CharField(max_length=255)),
                ('estado_usuario', models.BooleanField(default=True)),
                ('id_rol', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.roles')),
            ],
        ),
        migrations.CreateModel(
            name='Asistencia',
            fields=[
                ('id_asistencia', models.AutoField(primary_key=True, serialize=False)),
                ('fecha', models.DateField()),
                ('lunes', models.CharField(choices=[('Presente', 'Presente'), ('Ausente', 'Ausente')], default='Ausente', max_length=10)),
                ('martes', models.CharField(choices=[('Presente', 'Presente'), ('Ausente', 'Ausente')], default='Ausente', max_length=10)),
                ('miercoles', models.CharField(choices=[('Presente', 'Presente'), ('Ausente', 'Ausente')], default='Ausente', max_length=10)),
                ('jueves', models.CharField(choices=[('Presente', 'Presente'), ('Ausente', 'Ausente')], default='Ausente', max_length=10)),
                ('viernes', models.CharField(choices=[('Presente', 'Presente'), ('Ausente', 'Ausente')], default='Ausente', max_length=10)),
                ('id_estudiante', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.estudiantes')),
            ],
            options={
                'unique_together': {('id_estudiante', 'fecha')},
            },
        ),
    ]
