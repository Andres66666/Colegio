import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Materias, Niveles } from '../../../model/modelo'; // Asegúrate de que la ruta sea correcta
import { SchoolService } from '../../../Services/school.service'; // Asegúrate de que la ruta sea correcta
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-materias',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './editar-materias.component.html',
  styleUrls: ['./editar-materias.component.css'],
})
export class EditarMateriasComponent implements OnInit {
  form!: FormGroup; // Declare form as a class property
  niveles: Niveles[] = [];
  materia!: Materias;

  manejarModal: boolean = false;
  mensajeModal: string = '';
  errorModal: string = '';

  @Input() materiaId: number | null = null;
  @Output() listarMateriasEditado = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private schoolService: SchoolService) {
    this.form = this.fb.group({
      nombre_materia: ['', Validators.required],
      nivel: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadNiveles(); // Cargar niveles al iniciar el componente
    if (this.materiaId !== null) {
      this.loadMateriaData(this.materiaId); // Cargar datos de la materia
    } else {
      console.error('materiaId is null or undefined');
    }
  }

  loadNiveles(): void {
    this.schoolService.getNiveles().subscribe({
      next: (niveles) => {
        this.niveles = niveles;
      },
    });
  }

  loadMateriaData(id: number) {
    this.schoolService.getmateriaById(id).subscribe({
      next: (data) => {
        this.materia = data;
        this.initializeForm();
      },
    });
  }
  initializeForm(): void {
    this.form.patchValue({
      nombre_materia: new FormControl(this.materia.nombre_materia),
      obra: new FormControl(this.materia.nivel.id_nivel, Validators.required),
    });
  }
  onSubmit(): void {
    if (this.form.valid) {
      const updatedMateria: Materias = {
        id_materia: this.materia.id_materia!, // Asegúrate de incluir el ID de la materia
        nombre_materia: this.form.value.nombre_materia,

        nivel: {
          id_nivel: this.form.value.nivel,
          nombre_nivel: this.materia.nivel.nombre_nivel,
          estado_niveles: this.materia.nivel.estado_niveles,
        },
      };

      if (this.materia.id_materia !== undefined) {
        this.schoolService
          .editarMateria(this.materia.id_materia, updatedMateria)
          .subscribe({
            next: () => {
              this.mensajeModal = 'Materia actualizada con éxito';
              this.manejarModal = true;
              setTimeout(() => {
                this.listarMateriasEditado.emit(); // Emitir evento para actualizar la lista de materias
              }, 2000);
            },
            error: (err) => {
              this.errorModal = 'Error al actualizar la materia';
              this.manejarModal = true;
            },
          });
      } else {
        console.error('ID de materia es undefined');
      }
    }
  }
}
