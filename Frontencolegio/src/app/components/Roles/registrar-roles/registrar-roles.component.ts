import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SchoolService } from '../../../Services/school.service';
import { Roles } from '../../../model/modelo';

@Component({
  selector: 'app-registrar-roles',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registrar-roles.component.html',
  styleUrls: ['./registrar-roles.component.css'], // Corrige 'styleUrl' a 'styleUrls'
})
export class RegistrarRolesComponent {
  rolForm: FormGroup;
  mensaje: string = '';
  mensajeExito: string = '';
  @Output() listarRoles = new EventEmitter<void>(); // Cambia el nombre a listarRoles

  constructor(private fb: FormBuilder, private schoolService: SchoolService) {
    this.rolForm = this.fb.group({
      nombre: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.rolForm.valid) {
      const nuevoRol: Roles = {
        id_rol: 0,
        nombre_rol: this.rolForm.value.nombre,
        estado_Rol: true,
      };
      this.schoolService.registrarRol(nuevoRol).subscribe({
        next: (response) => {
          this.mensajeExito = 'Rol registrado exitosamente!';
          this.mensaje = '';
          this.rolForm.reset();
          setTimeout(() => {
            this.listarRoles.emit(); // Emitir evento para listar roles
          }, 2000);
        },
        error: (error) => {
          this.mensaje = 'Error al registrar el rol. Intente nuevamente.';
          this.mensajeExito = '';
        },
      });
    } else {
      this.mensaje = 'Por favor, complete todos los campos requeridos.';
    }
  }
}
