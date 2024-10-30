import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMaestrosComponent } from './editar-maestros.component';

describe('EditarMaestrosComponent', () => {
  let component: EditarMaestrosComponent;
  let fixture: ComponentFixture<EditarMaestrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarMaestrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
