import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreitInvestigacionInstitucionalComponent } from './greit-investigacion-institucional.component';

describe('GreitInvestigacionInstitucionalComponent', () => {
  let component: GreitInvestigacionInstitucionalComponent;
  let fixture: ComponentFixture<GreitInvestigacionInstitucionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreitInvestigacionInstitucionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreitInvestigacionInstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
