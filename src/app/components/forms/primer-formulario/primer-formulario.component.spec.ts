import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerFormularioComponent } from './primer-formulario.component';

describe('PrimerFormularioComponent', () => {
  let component: PrimerFormularioComponent;
  let fixture: ComponentFixture<PrimerFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
