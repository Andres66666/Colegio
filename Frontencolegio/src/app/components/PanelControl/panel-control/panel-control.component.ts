import { InscripcionesCursos } from './../../../model/modelo';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarNivelesComponent } from '../../Niveles/listar-niveles/listar-niveles.component';
import { RegistrarNivelesComponent } from '../../Niveles/registrar-niveles/registrar-niveles.component';
import { EditarNivelesComponent } from '../../Niveles/editar-niveles/editar-niveles.component';
import { ListarRolesComponent } from '../../Roles/listar-roles/listar-roles.component'; // Importar listar roles
import { RegistrarRolesComponent } from '../../Roles/registrar-roles/registrar-roles.component'; // Importar registrar roles
import { EditarRolesComponent } from '../../Roles/editar-roles/editar-roles.component'; // Importar editar roles
import { RouterOutlet } from '@angular/router';
import { SchoolService } from '../../../Services/school.service';
import { EditarMaestrosComponent } from "../../Maestros/editar-maestros/editar-maestros.component";
import { RegistrarMaestrosComponent } from "../../Maestros/registrar-maestros/registrar-maestros.component";
import { ListarMaestrosComponent } from "../../Maestros/listar-maestros/listar-maestros.component";
import { EditarMateriasComponent } from "../../Materias/editar-materias/editar-materias.component";
import { RegistrarMateriasComponent } from "../../Materias/registrar-materias/registrar-materias.component";
import { ListarMateriasComponent } from "../../Materias/listar-materias/listar-materias.component";
import { ListarEstudiantesComponent } from "../../Estudiantes/listar-estudiantes/listar-estudiantes.component";
import { RegistrarEstudiantesComponent } from "../../Estudiantes/registrar-estudiantes/registrar-estudiantes.component";
import { EditarEstudiantesComponent } from "../../Estudiantes/editar-estudiantes/editar-estudiantes.component";
import { RegistrarAsistenciaComponent } from "../../Asistencia/registrar-asistencia/registrar-asistencia.component";
import { ListarAsistenciaComponent } from "../../Asistencia/listar-asistencia/listar-asistencia.component";
import { EditarNotasComponent } from "../../Notas/editar-notas/editar-notas.component";
import { RegistrarNotasComponent } from "../../Notas/registrar-notas/registrar-notas.component";
import { ListarNotasComponent } from "../../Notas/listar-notas/listar-notas.component";
import { EditarInscripcionesCursosComponent } from "../../Inscripciones_Cursos/editar-inscripciones-cursos/editar-inscripciones-cursos.component";
import { RegistrarInscripcionesCursosComponent } from "../../Inscripciones_Cursos/registrar-inscripciones-cursos/registrar-inscripciones-cursos.component";
import { ListarInscripcionesCursosComponent } from "../../Inscripciones_Cursos/listar-inscripciones-cursos/listar-inscripciones-cursos.component";
import { EditarCurosComponent } from "../../Cursos/editar-curos/editar-curos.component";
import { RegistrarCursosComponent } from "../../Cursos/registrar-cursos/registrar-cursos.component";
import { ListarCursosComponent } from "../../Cursos/listar-cursos/listar-cursos.component";
import { EditarUsuariosComponent } from "../../Usuarios/editar-usuarios/editar-usuarios.component";
import { RegistrarUsuariosComponent } from "../../Usuarios/registrar-usuarios/registrar-usuarios.component";
import { ListarUsuariosComponent } from "../../Usuarios/listar-usuarios/listar-usuarios.component";
import { EditarAsistenciaComponent } from "../../Asistencia/editar-asistencia/editar-asistencia.component";

@Component({
  selector: 'app-panel-control',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RegistrarNivelesComponent,
    ListarNivelesComponent,
    EditarNivelesComponent,
    ListarRolesComponent,
    RegistrarRolesComponent,
    EditarRolesComponent,
    EditarMaestrosComponent,
    RegistrarMaestrosComponent,
    ListarMaestrosComponent,
    EditarMateriasComponent,
    RegistrarMateriasComponent,
    ListarMateriasComponent,
    ListarEstudiantesComponent,
    RegistrarEstudiantesComponent,
    EditarEstudiantesComponent,
    RegistrarAsistenciaComponent,
    ListarAsistenciaComponent,
    EditarNotasComponent,
    RegistrarNotasComponent,
    ListarNotasComponent,
    EditarInscripcionesCursosComponent,
    RegistrarInscripcionesCursosComponent,
    ListarInscripcionesCursosComponent,
    EditarCurosComponent,
    RegistrarCursosComponent,
    ListarCursosComponent,
    EditarUsuariosComponent,
    RegistrarUsuariosComponent,
    ListarUsuariosComponent,
    EditarAsistenciaComponent
],
  templateUrl: './panel-control.component.html',
  styleUrls: ['./panel-control.component.css'],
})
export class PanelControlComponent {
  activeSection: string | null = null;
  componenteActual: string = '';

  nivelesIdParaEditar: number | null = null;
  rolesIdParaEditar: number | null = null;
  materiasIdParaEditar: number | null = null;
  maestrosIdParaEditar: number | null = null;
  estudiantesIdParaEditar: number | null = null;
  usuariosIdParaEditar: number | null = null;
  cursosIdParaEditar: number | null = null;
  inscripcionesCursosIdParaEditar: number | null = null;
  notasIdParaEditar: number | null = null;
  asistenciasIdParaEditar: number | null = null;

  isSidebarOpen = true;
  isSidebarVisible: boolean = true;
  iconClass: string = 'fas fa-bars';

  constructor() {}

  mostrarComponente(componente: string, id?: number): void {
    this.componenteActual = componente;

    if (componente === 'EditarNivel' && id != null) {
      this.nivelesIdParaEditar = id;
    } else if (componente === 'EditarRol' && id != null) {
      this.rolesIdParaEditar = id;
    } else if (componente === 'EditarMateria' && id != null) {
      this.materiasIdParaEditar = id;
    } else if (componente === 'EditarMaestro' && id != null) {
      this.maestrosIdParaEditar = id;
    } else if (componente === 'EditarEstudiante' && id != null) {
      this.estudiantesIdParaEditar = id;
    } else if (componente === 'EditarUsuario' && id != null) {
      this.usuariosIdParaEditar = id;
    } else if (componente === 'EditarCurso' && id != null) {
      this.cursosIdParaEditar = id;
    } else if (componente === 'EditarInscripcion' && id != null) {
      this.inscripcionesCursosIdParaEditar = id;
    } else if (componente === 'EditarNotas' && id != null) {
      this.notasIdParaEditar = id;
    } else if (componente === 'EditarAsistencia' && id != null) {
      this.asistenciasIdParaEditar = id;
    }

    this.activeSection = null;
  }

  onRegistrarNivel() {
    this.componenteActual = 'RegistrarNivel';
  }

  onRegistrarRol() {
    this.componenteActual = 'RegistrarRol';
  }

  onRegistrarMateria() {
    this.componenteActual = 'RegistrarMateria';
  }

  onRegistrarMaestro() {
    this.componenteActual = 'RegistrarMaestro';
  }

  onRegistrarEstudiante() {
    this.componenteActual = 'RegistrarEstudiante';
  }

  onRegistrarUsuario() {
    this.componenteActual = 'RegistrarUsuario';
  }

  onRegistrarCurso() {
    this.componenteActual = 'RegistrarCurso';
  }

  onRegistrarInscripcion() {
    this.componenteActual = 'RegistrarInscripcion';
  }

  onRegistrarNota() {
    this.componenteActual = 'RegistrarNota';
  }

  onRegistrarAsistencia() {
    this.componenteActual = 'RegistrarAsistencia';
  }

  toggleOptions(section: string): void {
    this.activeSection = this.activeSection === section ? null : section;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.isSidebarVisible = !this.isSidebarVisible;
    this.iconClass = this.isSidebarVisible ? 'fas fa-bars' : 'fas fa-times';
  }
}
