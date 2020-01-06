import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoAsignadoComponent } from './presupuesto-asignado.component';

describe('PresupuestoAsignadoComponent', () => {
  let component: PresupuestoAsignadoComponent;
  let fixture: ComponentFixture<PresupuestoAsignadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresupuestoAsignadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresupuestoAsignadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
