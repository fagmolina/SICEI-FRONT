import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaProductosComponent } from './grafica-productos.component';

describe('GraficaProductosComponent', () => {
  let component: GraficaProductosComponent;
  let fixture: ComponentFixture<GraficaProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
