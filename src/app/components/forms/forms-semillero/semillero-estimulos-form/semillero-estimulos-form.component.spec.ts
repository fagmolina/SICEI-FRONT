import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemilleroEstimulosFormComponent } from './semillero-estimulos-form.component';

describe('SemilleroEstimulosFormComponent', () => {
  let component: SemilleroEstimulosFormComponent;
  let fixture: ComponentFixture<SemilleroEstimulosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemilleroEstimulosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemilleroEstimulosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
