import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInscripcionesCursosComponent } from './listar-inscripciones-cursos.component';

describe('ListarInscripcionesCursosComponent', () => {
  let component: ListarInscripcionesCursosComponent;
  let fixture: ComponentFixture<ListarInscripcionesCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarInscripcionesCursosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarInscripcionesCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
