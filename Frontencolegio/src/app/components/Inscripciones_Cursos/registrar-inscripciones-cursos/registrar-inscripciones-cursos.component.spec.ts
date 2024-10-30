import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarInscripcionesCursosComponent } from './registrar-inscripciones-cursos.component';

describe('RegistrarInscripcionesCursosComponent', () => {
  let component: RegistrarInscripcionesCursosComponent;
  let fixture: ComponentFixture<RegistrarInscripcionesCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarInscripcionesCursosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarInscripcionesCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
