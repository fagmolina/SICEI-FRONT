import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GriftRedesInvestigacionComponent } from './grift-redes-investigacion.component';

describe('GriftRedesInvestigacionComponent', () => {
  let component: GriftRedesInvestigacionComponent;
  let fixture: ComponentFixture<GriftRedesInvestigacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GriftRedesInvestigacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GriftRedesInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
