import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GriftInvestigacionInstitucionalComponent } from './grift-investigacion-institucional.component';

describe('GriftInvestigacionInstitucionalComponent', () => {
  let component: GriftInvestigacionInstitucionalComponent;
  let fixture: ComponentFixture<GriftInvestigacionInstitucionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GriftInvestigacionInstitucionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GriftInvestigacionInstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
