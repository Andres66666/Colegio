import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMaestrosComponent } from './registrar-maestros.component';

describe('RegistrarMaestrosComponent', () => {
  let component: RegistrarMaestrosComponent;
  let fixture: ComponentFixture<RegistrarMaestrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarMaestrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarMaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
