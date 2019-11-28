import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GriftSemillerosInvestigacionComponent } from './grift-semilleros-investigacion.component';

describe('GriftSemillerosInvestigacionComponent', () => {
  let component: GriftSemillerosInvestigacionComponent;
  let fixture: ComponentFixture<GriftSemillerosInvestigacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GriftSemillerosInvestigacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GriftSemillerosInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
