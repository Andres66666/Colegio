import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Materias, Niveles } from '../../../model/modelo';
import { SchoolService } from '../../../Services/school.service';

@Component({
  selector: 'app-registrar-materias',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registrar-materias.component.html',
  styleUrls: ['./registrar-materias.component.css'],
})
export class RegistrarMateriasComponent implements OnInit {
  materiaForm: FormGroup;
  mensaje: string = '';
  mensajeExito: string = '';
  niveles: Niveles[] = []; // Cambié 'nivel' a 'niveles' para mayor claridad
  @Output() listarMaterias = new EventEmitter<void>();

  manejarModal: boolean = false;
  errorModal: string = '';

  constructor(private fb: FormBuilder, private schoolService: SchoolService) {
    this.materiaForm = this.fb.group({
      nombre_materia: ['', Validators.required],
      nivel: ['', Validators.required], // Asegúrate de que este campo sea requerido
    });
  }

  ngOnInit(): void {
    this.loadNiveles(); // Cargar niveles al iniciar el componente
  }

  loadNiveles() {
    this.schoolService.getNiveles().subscribe(
      (data) => {
        this.niveles = data; // Cargar los niveles en la variable 'niveles'
      },
      (error) => {
        console.error('Error al cargar niveles:', error);
      }
    );
  }

  onSubmit() {
    if (this.materiaForm.valid) {
      const nuevaMateria: Materias = {
        ...this.materiaForm.value,
      };

      this.schoolService.registrarMateria(nuevaMateria).subscribe(
        (response) => {
          this.mensajeExito = 'Materia registrada exitosamente!';
          this.mensaje = '';
          this.materiaForm.reset();
          setTimeout(() => {
            this.listarMaterias.emit();
          }, 2000);
        },
        (error) => {
          this.errorModal =
            'Error al registrar la materia. Intente nuevamente.';
          this.manejarModal = true;
          this.mensajeExito = '';
        }
      );
    } else {
      this.mensaje = 'Por favor, complete todos los campos requeridos.';
    }
  }
}
