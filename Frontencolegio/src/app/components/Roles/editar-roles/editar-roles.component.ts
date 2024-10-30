import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SchoolService } from '../../../Services/school.service';
import { Roles } from '../../../model/modelo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-roles',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './editar-roles.component.html',
  styleUrls: ['./editar-roles.component.css'],
})
export class EditarRolesComponent implements OnInit {
  rolForm: FormGroup;
  mensaje: string = '';
  mensajeExito: string = '';
  @Input() rolesId: number | null = null; // ID del rol a editar
  @Output() listarRolesEditado = new EventEmitter<void>(); // Evento para listar roles editados

  constructor(private fb: FormBuilder, private schoolService: SchoolService) {
    this.rolForm = this.fb.group({
      nombre_rol: ['', Validators.required],
      estado_Rol: [true, Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.rolesId) {
      this.cargarRol(this.rolesId);
    }
  }

  cargarRol(id: number): void {
    this.schoolService.getRolById(id).subscribe({
      next: (rol: Roles) => {
        this.rolForm.patchValue({
          nombre_rol: rol.nombre_rol,
          estado_Rol: rol.estado_Rol,
        });
      },
      error: (error) => {
        console.error('Error al cargar el rol:', error);
        this.mensaje = 'Rol no encontrado.';
      },
    });
  }

  actualizarRol(): void {
    if (this.rolForm.valid) {
      const updatedRol: Roles = {
        id_rol: this.rolesId as number, // Asegúrate de que rolesId no sea null
        nombre_rol: this.rolForm.value.nombre_rol,
        estado_Rol: this.rolForm.value.estado_Rol,
      };
      this.schoolService
        .editarRol(this.rolesId as number, updatedRol)
        .subscribe({
          next: () => {
            this.mensajeExito = 'Rol actualizado con éxito.';
            setTimeout(() => {
              this.listarRolesEditado.emit(); // Emitir evento para listar roles
            }, 2000);
          },
          error: (error) => {
            console.error('Error al actualizar el rol:', error);
            this.mensaje = 'Error al actualizar el rol. Intente nuevamente.';
          },
        });
    }
  }
}
