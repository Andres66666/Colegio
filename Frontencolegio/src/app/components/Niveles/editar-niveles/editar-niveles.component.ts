import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SchoolService } from '../../../Services/school.service';
import { Niveles } from '../../../model/modelo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-niveles',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './editar-niveles.component.html',
  styleUrls: ['./editar-niveles.component.css'],
})
export class EditarNivelesComponent implements OnInit {
  nivelForm: FormGroup;
  mensaje: string = '';
  mensajeExito: string = '';
  id_nivel: number = 0;
  @Input() nivelesId: number | null = null;
  @Output() listarNivelesEditado = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private schoolService: SchoolService) {
    this.nivelForm = this.fb.group({
      nombre_nivel: ['', Validators.required],
      estado_niveles: [true, Validators.required],
    });
  }
  ngOnInit(): void {
    if (this.nivelesId) {
      this.cargarNivel(this.nivelesId);
    }
  }
  cargarNivel(id: number): void {
    this.schoolService.getNivelById(id).subscribe({
      next: (nivel: Niveles) => {
        this.nivelForm.patchValue({
          nombre_nivel: nivel.nombre_nivel,
          estado_niveles: nivel.estado_niveles,
        });
      },
      error: (error) => {
        console.error('Error al cargar el nivel:', error);
        this.mensaje = 'Nivel no encontrado.';
      },
    });
  }
  actualizarNivel(): void {
    if (this.nivelForm.valid) {
      const updatedNivel: Niveles = {
        id_nivel: this.nivelesId as number, // Asegúrate de que nivelesId no sea null
        nombre_nivel: this.nivelForm.value.nombre_nivel,
        estado_niveles: this.nivelForm.value.estado_niveles,
      };
      this.schoolService
        .editarNivel(this.nivelesId as number, updatedNivel)
        .subscribe({
          next: () => {
            this.mensajeExito = 'Nivel actualizado con éxito.';
            setTimeout(() => {
              this.listarNivelesEditado.emit();
            }, 2000);
          },
          error: (error) => {
            console.error('Error al actualizar el nivel:', error);
            this.mensaje = 'Error al actualizar el nivel. Intente nuevamente.';
          },
        });
    }
  }
}
