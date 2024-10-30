import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Asistencia,
  Cursos,
  Estudiantes,
  InscripcionesCursos,
  Maestros,
  Materias,
  Niveles,
  Notas,
  Roles,
  Usuarios,
} from '../model/modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  private apiUrl = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) {}

  // Obtener la lista de niveles
  getNiveles(): Observable<Niveles[]> {
    return this.http.get<Niveles[]>(`${this.apiUrl}niveles/`); // Asegúrate de que la ruta sea correcta
  }
  // Obtener un nivel por ID
  getNivelById(id: number): Observable<Niveles> {
    return this.http.get<Niveles>(`${this.apiUrl}niveles/${id}/`);
  }
  // Registrar un nuevo nivel
  registrarNivel(nivel: Niveles): Observable<Niveles> {
    return this.http.post<Niveles>(`${this.apiUrl}niveles/`, nivel);
  }
  // Editar un nivel existente
  editarNivel(id: number, nivel: Niveles): Observable<Niveles> {
    return this.http.put<Niveles>(`${this.apiUrl}niveles/${id}/`, nivel);
  }

  // Obtener la lista de roles
  getRoles(): Observable<Roles[]> {
    return this.http.get<Roles[]>(`${this.apiUrl}roles/`);
  }

  // Obtener un rol por ID
  getRolById(id: number): Observable<Roles> {
    return this.http.get<Roles>(`${this.apiUrl}roles/${id}/`);
  }

  // Registrar un nuevo rol
  registrarRol(rol: Roles): Observable<Roles> {
    return this.http.post<Roles>(`${this.apiUrl}roles/`, rol);
  }

  // Editar un rol existente
  editarRol(id: number, rol: Roles): Observable<Roles> {
    return this.http.put<Roles>(`${this.apiUrl}roles/${id}/`, rol);
  }

  // Obtener la lista de Materias
  getMaterias(): Observable<Materias[]> {
    return this.http.get<Materias[]>(`${this.apiUrl}materias/`);
  }

  // Obtener un Materias por ID
  getmateriaById(id: number): Observable<Materias> {
    return this.http.get<Materias>(`${this.apiUrl}materias/${id}/`);
  }

  // Registrar un nueva materia
  registrarMateria(materia: Materias): Observable<Materias> {
    return this.http.post<Materias>(`${this.apiUrl}materias/`, materia);
  }

  // Editar un rol existente
  editarMateria(id: number, materias: Materias): Observable<Materias> {
    return this.http.put<Materias>(`${this.apiUrl}materias/${id}/`, materias);
  }

  // Obtener la lista de maestros
  getMaestros(): Observable<Maestros[]> {
    return this.http.get<Maestros[]>(`${this.apiUrl}maestros/`);
  }

  // Obtener un maestro por ID
  getMaestroById(id: number): Observable<Maestros> {
    return this.http.get<Maestros>(`${this.apiUrl}maestros/${id}/`);
  }

  // Registrar un nuevo maestro
  registrarMaestro(maestro: Maestros): Observable<Maestros> {
    return this.http.post<Maestros>(`${this.apiUrl}maestros/`, maestro);
  }

  // Editar un maestro existente
  editarMaestro(id: number, maestro: Maestros): Observable<Maestros> {
    return this.http.put<Maestros>(`${this.apiUrl}maestros/${id}/`, maestro);
  }

  // Obtener la lista de estudiantes
  getEstudiantes(): Observable<Estudiantes[]> {
    return this.http.get<Estudiantes[]>(`${this.apiUrl}estudiantes/`);
  }

  // Obtener un estudiante por ID
  getEstudianteById(id: number): Observable<Estudiantes> {
    return this.http.get<Estudiantes>(`${this.apiUrl}estudiantes/${id}/`);
  }

  // Registrar un nuevo estudiante
  registrarEstudiante(estudiante: Estudiantes): Observable<Estudiantes> {
    return this.http.post<Estudiantes>(
      `${this.apiUrl}estudiantes/`,
      estudiante
    );
  }

  // Editar un estudiante existente
  editarEstudiante(
    id: number,
    estudiante: Estudiantes
  ): Observable<Estudiantes> {
    return this.http.put<Estudiantes>(
      `${this.apiUrl}estudiantes/${id}/`,
      estudiante
    );
  }

  /* usuarios  */

  // Obtener la lista de usuarios
  getUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(`${this.apiUrl}usuarios/`);
  }

  // Obtener un usuario por ID
  getUsuarioById(id: number): Observable<Usuarios> {
    return this.http.get<Usuarios>(`${this.apiUrl}usuarios/${id}/`);
  }

  // Registrar un nuevo usuario
  registrarUsuario(usuario: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(`${this.apiUrl}usuarios/`, usuario);
  }

  // Editar un usuario existente
  editarUsuario(id: number, usuario: Usuarios): Observable<Usuarios> {
    return this.http.put<Usuarios>(`${this.apiUrl}usuarios/${id}/`, usuario);
  }

  /* cursos  */
  // Obtener la lista de cursos
  getCursos(): Observable<Cursos[]> {
    return this.http.get<Cursos[]>(`${this.apiUrl}cursos/`);
  }

  // Obtener un curso por ID
  getCursoById(id: number): Observable<Cursos> {
    return this.http.get<Cursos>(`${this.apiUrl}cursos/${id}/`);
  }

  // Registrar un nuevo curso
  registrarCurso(curso: Cursos): Observable<Cursos> {
    return this.http.post<Cursos>(`${this.apiUrl}cursos/`, curso);
  }

  // Editar un curso existente
  editarCurso(id: number, curso: Cursos): Observable<Cursos> {
    return this.http.put<Cursos>(`${this.apiUrl}cursos/${id}/`, curso);
  }
  /* InscripcionesCursos */
  // Obtener la lista de inscripciones a cursos
  getInscripcionesCursos(): Observable<InscripcionesCursos[]> {
    return this.http.get<InscripcionesCursos[]>(
      `${this.apiUrl}inscripciones-cursos/`
    );
  }

  // Obtener una inscripción a curso por ID
  getInscripcionCursoById(id: number): Observable<InscripcionesCursos> {
    return this.http.get<InscripcionesCursos>(
      `${this.apiUrl}inscripciones-cursos/${id}/`
    );
  }

  // Registrar una nueva inscripción a curso
  registrarInscripcionCurso(
    inscripcion: InscripcionesCursos
  ): Observable<InscripcionesCursos> {
    return this.http.post<InscripcionesCursos>(
      `${this.apiUrl}inscripciones-cursos/`,
      inscripcion
    );
  }

  // Editar una inscripción a curso existente
  editarInscripcionCurso(
    id: number,
    inscripcion: InscripcionesCursos
  ): Observable<InscripcionesCursos> {
    return this.http.put<InscripcionesCursos>(
      `${this.apiUrl}inscripciones-cursos/${id}/`,
      inscripcion
    );
  }
  /*  Notas */
  // Obtener la lista de notas
  getNotas(): Observable<Notas[]> {
    return this.http.get<Notas[]>(`${this.apiUrl}notas/`);
  }

  // Obtener una nota por ID
  getNotaById(id: number): Observable<Notas> {
    return this.http.get<Notas>(`${this.apiUrl}notas/${id}/`);
  }

  // Registrar una nueva nota
  registrarNota(nota: Notas): Observable<Notas> {
    return this.http.post<Notas>(`${this.apiUrl}notas/`, nota);
  }

  // Editar una nota existente
  editarNota(id: number, nota: Notas): Observable<Notas> {
    return this.http.put<Notas>(`${this.apiUrl}notas/${id}/`, nota);
  }
  /* asistencia */
  // Obtener la lista de asistencias
  getAsistencias(): Observable<Asistencia[]> {
    return this.http.get<Asistencia[]>(`${this.apiUrl}asistencias/`);
  }

  // Obtener una asistencia por ID
  getAsistenciaById(id: number): Observable<Asistencia> {
    return this.http.get<Asistencia>(`${this.apiUrl}asistencias/${id}/`);
  }

  // Registrar una nueva asistencia
  registrarAsistencia(asistencia: Asistencia): Observable<Asistencia> {
    return this.http.post<Asistencia>(`${this.apiUrl}asistencias/`, asistencia);
  }

  // Editar una asistencia existente
  editarAsistencia(id: number, asistencia: Asistencia): Observable<Asistencia> {
    return this.http.put<Asistencia>(
      `${this.apiUrl}asistencias/${id}/`,
      asistencia
    );
  }
}
