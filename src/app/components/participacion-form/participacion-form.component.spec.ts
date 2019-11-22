import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacionFormComponent } from './participacion-form.component';

describe('ParticipacionFormComponent', () => {
  let component: ParticipacionFormComponent;
  let fixture: ComponentFixture<ParticipacionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipacionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
