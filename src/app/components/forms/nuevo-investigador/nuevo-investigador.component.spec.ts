import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoInvestigadorComponent } from './nuevo-investigador.component';

describe('NuevoInvestigadorComponent', () => {
  let component: NuevoInvestigadorComponent;
  let fixture: ComponentFixture<NuevoInvestigadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoInvestigadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoInvestigadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
