import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCurosComponent } from './editar-curos.component';

describe('EditarCurosComponent', () => {
  let component: EditarCurosComponent;
  let fixture: ComponentFixture<EditarCurosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarCurosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
