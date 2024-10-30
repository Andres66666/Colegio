import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNivelesComponent } from './listar-niveles.component';

describe('ListarNivelesComponent', () => {
  let component: ListarNivelesComponent;
  let fixture: ComponentFixture<ListarNivelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarNivelesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarNivelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
