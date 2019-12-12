import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreitInvestigacionImplementadaComponent } from './greit-investigacion-implementada.component';

describe('GreitInvestigacionImplementadaComponent', () => {
  let component: GreitInvestigacionImplementadaComponent;
  let fixture: ComponentFixture<GreitInvestigacionImplementadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreitInvestigacionImplementadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreitInvestigacionImplementadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
