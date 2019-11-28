import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GriftInvestigacionImplementadaComponent } from './grift-investigacion-implementada.component';

describe('GriftInvestigacionImplementadaComponent', () => {
  let component: GriftInvestigacionImplementadaComponent;
  let fixture: ComponentFixture<GriftInvestigacionImplementadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GriftInvestigacionImplementadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GriftInvestigacionImplementadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
