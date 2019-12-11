import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAreasLineasComponent } from './formulario-areas-lineas.component';

describe('FormularioAreasLineasComponent', () => {
  let component: FormularioAreasLineasComponent;
  let fixture: ComponentFixture<FormularioAreasLineasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioAreasLineasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAreasLineasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
