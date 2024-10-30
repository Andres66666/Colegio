import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMaestrosComponent } from './listar-maestros.component';

describe('ListarMaestrosComponent', () => {
  let component: ListarMaestrosComponent;
  let fixture: ComponentFixture<ListarMaestrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarMaestrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarMaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
