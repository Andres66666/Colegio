export interface Niveles {
  id_nivel: number;
  nombre_nivel: string;
  estado_niveles: boolean;
}

export interface Roles {
  id_rol: number;
  nombre_rol: string;
  estado_Rol: boolean;
}

export interface Materias {
  id_materia?: number;
  nombre_materia: string;
  nivel: Niveles;
  estado_materias?: boolean;
}

export interface Maestros {
  id_maestro: number;
  nombre: string;
  apellido: string;
  materia: Materias;
  id_rol: Roles;
  estado_maestro: boolean;
}

export interface Estudiantes {
  id_estudiante: number;
  nombre: string;
  apellido: string;
  nivel: Niveles; // Relación con Niveles
  id_rol: Roles; // Relación con Roles
  estado_estudiante: boolean;
}

export interface Usuarios {
  id_usuario: number;
  usuario: string;
  contrasena: string;
  id_rol: Roles; // Relación con Roles
  estado_usuario: boolean;
}

export interface Cursos {
  id_curso: number;
  nombre_curso: string;
  descripcion: string;
  nivel: Niveles; // Relación con Niveles
  color_curso: string; // Puede ser "Rojo", "Azul" o "Blanco"
  maestro_responsable: Maestros; // Relación con Maestros
}

export interface InscripcionesCursos {
  id_inscripcion: number;
  id_estudiante: Estudiantes; // Relación con Estudiantes
  id_curso: Cursos; // Relación con Cursos
  fecha_inscripcion: string; // Formato de fecha
}

export interface Notas {
  id_nota: number;
  id_estudiante: Estudiantes; // Relación con Estudiantes
  id_curso: Cursos; // Relación con Cursos
  id_materia: Materias; // Relación con Materias
  nota: number; // Nota numérica
  fecha: string; // Formato de fecha
}

export interface Asistencia {
  id_asistencia: number;
  id_estudiante: Estudiantes; // Relación con Estudiantes
  fecha: string; // Formato de fecha
  lunes: 'Presente' | 'Ausente';
  martes: 'Presente' | 'Ausente';
  miercoles: 'Presente' | 'Ausente';
  jueves: 'Presente' | 'Ausente';
  viernes: 'Presente' | 'Ausente';
}
