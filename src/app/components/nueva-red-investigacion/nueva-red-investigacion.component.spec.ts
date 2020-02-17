import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaRedInvestigacionComponent } from './nueva-red-investigacion.component';

describe('NuevaRedInvestigacionComponent', () => {
  let component: NuevaRedInvestigacionComponent;
  let fixture: ComponentFixture<NuevaRedInvestigacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaRedInvestigacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaRedInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
