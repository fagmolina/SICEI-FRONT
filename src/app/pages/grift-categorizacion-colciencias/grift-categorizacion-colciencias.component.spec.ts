import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GriftCategorizacionColcienciasComponent } from './grift-categorizacion-colciencias.component';

describe('GriftCategorizacionColcienciasComponent', () => {
  let component: GriftCategorizacionColcienciasComponent;
  let fixture: ComponentFixture<GriftCategorizacionColcienciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GriftCategorizacionColcienciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GriftCategorizacionColcienciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
