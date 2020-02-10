import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCasoEmblematicoComponent } from './nuevo-caso-emblematico.component';

describe('NuevoCasoEmblematicoComponent', () => {
  let component: NuevoCasoEmblematicoComponent;
  let fixture: ComponentFixture<NuevoCasoEmblematicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoCasoEmblematicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoCasoEmblematicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
