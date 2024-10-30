import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Materias, Niveles } from '../../../model/modelo'; // Asegúrate de que la ruta sea correcta
import { SchoolService } from '../../../Services/school.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-materias',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './listar-materias.component.html',
  styleUrls: ['./listar-materias.component.css'],
})
export class ListarMateriasComponent implements OnInit {
  materias: Materias[] = [];
  mensaje: string = '';
  @Output() editarMaterias = new EventEmitter<number>();
  @Output() registrarMaterias = new EventEmitter<number>();

  constructor(private schoolService: SchoolService) {}

  ngOnInit(): void {
    this.cargarMaterias();
  }
  cargarMaterias() {
    this.schoolService.getMaterias().subscribe((data) => {
      console.log(data); // Verifica que los datos del almacen estén llegando correctamente
      this.materias = data;
    });
  }

  editarMateria(id: number) {
    this.editarMaterias.emit(id);
    this.cargarMaterias();
  }

  registrarMateria() {
    this.registrarMaterias.emit(); // Emit an event to register a new subject
  }
}
