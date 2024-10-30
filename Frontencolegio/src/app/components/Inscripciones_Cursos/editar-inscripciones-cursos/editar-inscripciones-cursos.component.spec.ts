import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInscripcionesCursosComponent } from './editar-inscripciones-cursos.component';

describe('EditarInscripcionesCursosComponent', () => {
  let component: EditarInscripcionesCursosComponent;
  let fixture: ComponentFixture<EditarInscripcionesCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarInscripcionesCursosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarInscripcionesCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
