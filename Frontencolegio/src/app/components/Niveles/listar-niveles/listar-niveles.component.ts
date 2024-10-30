import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Niveles } from '../../../model/modelo';
import { SchoolService } from '../../../Services/school.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-niveles',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './listar-niveles.component.html',
  styleUrls: ['./listar-niveles.component.css'],
})
export class ListarNivelesComponent implements OnInit {
  niveles: Niveles[] = [];
  mensaje: string = '';
  @Output() editarNiveles = new EventEmitter<number>(); 
  @Output() registrarNiveles = new EventEmitter<number>(); 
  constructor(private schoolService: SchoolService) {}
  ngOnInit(): void {
    this.getNiveles();
  }
  getNiveles() {
    this.schoolService.getNiveles().subscribe((data) => {
      this.niveles = data;
    });
  }
  editarNivel(id: number) {
    this.editarNiveles.emit(id);
    this.getNiveles();
  }
  registrarNivel() {
    this.registrarNiveles.emit(); // Emit an event to register a new level
  }
}
