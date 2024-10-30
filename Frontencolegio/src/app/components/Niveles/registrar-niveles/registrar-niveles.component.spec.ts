import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarNivelesComponent } from './registrar-niveles.component';

describe('RegistrarNivelesComponent', () => {
  let component: RegistrarNivelesComponent;
  let fixture: ComponentFixture<RegistrarNivelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarNivelesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarNivelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
