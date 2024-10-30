import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SchoolService } from '../../../Services/school.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Roles } from '../../../model/modelo';

@Component({
  selector: 'app-listar-roles',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './listar-roles.component.html',
  styleUrl: './listar-roles.component.css',
})
export class ListarRolesComponent implements OnInit {
  roles: Roles[] = [];
  mensaje: string = '';
  @Output() editarRoles = new EventEmitter<number>();
  @Output() registrarRoles = new EventEmitter<number>();
  constructor(private schoolService: SchoolService) {}
  ngOnInit(): void {
    this.getRoles();
  }
  getRoles() {
    this.schoolService.getRoles().subscribe((data) => {
      this.roles = data;
    });
  }
  editarRole(id: number) {
    this.editarRoles.emit(id);
    this.getRoles();
  }
  registrarRole() {
    this.registrarRoles.emit();
  }
}
