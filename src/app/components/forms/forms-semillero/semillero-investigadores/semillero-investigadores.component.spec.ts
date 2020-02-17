import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemilleroInvestigadoresComponent } from './semillero-investigadores.component';

describe('SemilleroInvestigadoresComponent', () => {
  let component: SemilleroInvestigadoresComponent;
  let fixture: ComponentFixture<SemilleroInvestigadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemilleroInvestigadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemilleroInvestigadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
