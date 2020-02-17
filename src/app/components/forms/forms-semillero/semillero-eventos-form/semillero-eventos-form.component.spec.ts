import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemilleroEventosFormComponent } from './semillero-eventos-form.component';

describe('SemilleroEventosFormComponent', () => {
  let component: SemilleroEventosFormComponent;
  let fixture: ComponentFixture<SemilleroEventosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemilleroEventosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemilleroEventosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
