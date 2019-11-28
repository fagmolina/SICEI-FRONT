import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GriftCasoEmblematicoComponent } from './grift-caso-emblematico.component';

describe('GriftCasoEmblematicoComponent', () => {
  let component: GriftCasoEmblematicoComponent;
  let fixture: ComponentFixture<GriftCasoEmblematicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GriftCasoEmblematicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GriftCasoEmblematicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
