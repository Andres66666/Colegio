import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/Index/index/index.component';
import { PanelControlComponent } from './components/PanelControl/panel-control/panel-control.component';
import { RegistrarNivelesComponent } from './components/Niveles/registrar-niveles/registrar-niveles.component';
import { EditarNivelesComponent } from './components/Niveles/editar-niveles/editar-niveles.component';
import { ListarNivelesComponent } from './components/Niveles/listar-niveles/listar-niveles.component';
import { RegistrarRolesComponent } from './components/Roles/registrar-roles/registrar-roles.component';
import { EditarRolesComponent } from './components/Roles/editar-roles/editar-roles.component';
import { ListarRolesComponent } from './components/Roles/listar-roles/listar-roles.component';
import { RegistrarMateriasComponent } from './components/Materias/registrar-materias/registrar-materias.component';
import { EditarMateriasComponent } from './components/Materias/editar-materias/editar-materias.component';
import { ListarMateriasComponent } from './components/Materias/listar-materias/listar-materias.component';
import { RegistrarMaestrosComponent } from './components/Maestros/registrar-maestros/registrar-maestros.component';
import { EditarMaestrosComponent } from './components/Maestros/editar-maestros/editar-maestros.component';
import { ListarMaestrosComponent } from './components/Maestros/listar-maestros/listar-maestros.component';
import { RegistrarEstudiantesComponent } from './components/Estudiantes/registrar-estudiantes/registrar-estudiantes.component';
import { EditarEstudiantesComponent } from './components/Estudiantes/editar-estudiantes/editar-estudiantes.component';
import { ListarEstudiantesComponent } from './components/Estudiantes/listar-estudiantes/listar-estudiantes.component';
import { RegistrarUsuariosComponent } from './components/Usuarios/registrar-usuarios/registrar-usuarios.component';
import { EditarUsuariosComponent } from './components/Usuarios/editar-usuarios/editar-usuarios.component';
import { ListarUsuariosComponent } from './components/Usuarios/listar-usuarios/listar-usuarios.component';
import { RegistrarCursosComponent } from './components/Cursos/registrar-cursos/registrar-cursos.component';
import { EditarCurosComponent } from './components/Cursos/editar-curos/editar-curos.component';
import { ListarCursosComponent } from './components/Cursos/listar-cursos/listar-cursos.component';
import { RegistrarInscripcionesCursosComponent } from './components/Inscripciones_Cursos/registrar-inscripciones-cursos/registrar-inscripciones-cursos.component';
import { EditarInscripcionesCursosComponent } from './components/Inscripciones_Cursos/editar-inscripciones-cursos/editar-inscripciones-cursos.component';
import { ListarInscripcionesCursosComponent } from './components/Inscripciones_Cursos/listar-inscripciones-cursos/listar-inscripciones-cursos.component';
import { RegistrarNotasComponent } from './components/Notas/registrar-notas/registrar-notas.component';
import { EditarNotasComponent } from './components/Notas/editar-notas/editar-notas.component';
import { ListarNotasComponent } from './components/Notas/listar-notas/listar-notas.component';
import { RegistrarAsistenciaComponent } from './components/Asistencia/registrar-asistencia/registrar-asistencia.component';
import { EditarAsistenciaComponent } from './components/Asistencia/editar-asistencia/editar-asistencia.component';
import { ListarAsistenciaComponent } from './components/Asistencia/listar-asistencia/listar-asistencia.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'panel-control', component: PanelControlComponent },

  { path: 'registrar-niveles', component: RegistrarNivelesComponent },
  { path: 'editar-niveles/:id', component: EditarNivelesComponent },
  { path: 'listar-niveles', component: ListarNivelesComponent },

  { path: 'registrar-roles', component: RegistrarRolesComponent },
  { path: 'editar-roles', component: EditarRolesComponent },
  { path: 'listar-roles', component: ListarRolesComponent },

  { path: 'registrar-materias', component: RegistrarMateriasComponent },
  { path: 'editar-materias/:id', component: EditarMateriasComponent },
  { path: 'listar-materias', component: ListarMateriasComponent },

  { path: 'registrar-maestros', component: RegistrarMaestrosComponent },
  { path: 'editar-maestros/:id', component: EditarMaestrosComponent },
  { path: 'listar-maestros', component: ListarMaestrosComponent },

  { path: 'registrar-estudiantes', component: RegistrarEstudiantesComponent },
  { path: 'editar-estudiantes/:id', component: EditarEstudiantesComponent },
  { path: 'listar-estudiantes', component: ListarEstudiantesComponent },

  { path: 'registrar-usuarios', component: RegistrarUsuariosComponent },
  { path: 'editar-usuarios/:id', component: EditarUsuariosComponent },
  { path: 'listar-usuarios', component: ListarUsuariosComponent },

  { path: 'registrar-cursos', component: RegistrarCursosComponent },
  { path: 'editar-cursos/:id', component: EditarCurosComponent },
  { path: 'listar-cursos', component: ListarCursosComponent },

  {
    path: 'registrar-inscripcionescursos',
    component: RegistrarInscripcionesCursosComponent,
  },
  {
    path: 'editar-inscripcionescursos/:id',
    component: EditarInscripcionesCursosComponent,
  },
  {
    path: 'listar-inscripcionescursos',
    component: ListarInscripcionesCursosComponent,
  },

  { path: 'registrar-notas', component: RegistrarNotasComponent },
  { path: 'editar-notas/:id', component: EditarNotasComponent },
  { path: 'listar-notas', component: ListarNotasComponent },

  { path: 'registrar-asistencia', component: RegistrarAsistenciaComponent },
  { path: 'editar-asistencia/:id', component: EditarAsistenciaComponent },
  { path: 'listar-asistencia', component: ListarAsistenciaComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
