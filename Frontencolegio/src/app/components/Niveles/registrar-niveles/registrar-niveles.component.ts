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
import { Niveles } from '../../../model/modelo';

@Component({
  selector: 'app-registrar-niveles',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registrar-niveles.component.html',
  styleUrl: './registrar-niveles.component.css',
})
export class RegistrarNivelesComponent {
  nivelForm: FormGroup;
  mensaje: string = '';
  mensajeExito: string = '';
  @Output() listarNiveles = new EventEmitter<void>();
  constructor(private fb: FormBuilder, private schoolService: SchoolService) {
    this.nivelForm = this.fb.group({
      nombre: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.nivelForm.valid) {
      const nuevoNivel: Niveles = {
        id_nivel: 0,
        nombre_nivel: this.nivelForm.value.nombre,
        estado_niveles: true,
      };
      this.schoolService.registrarNivel(nuevoNivel).subscribe({
        next: (response) => {
          this.mensajeExito = 'Nivel registrado exitosamente!';
          this.mensaje = '';
          this.nivelForm.reset();
          setTimeout(() => {
            this.listarNiveles.emit();
          }, 2000);
        },
        error: (error) => {
          this.mensaje = 'Error al registrar el nivel. Intente nuevamente.';
          this.mensajeExito = '';
        },
      });
    } else {
      this.mensaje = 'Por favor, complete todos los campos requeridos.';
    }
  }
}
