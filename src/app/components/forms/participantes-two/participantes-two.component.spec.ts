import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantesTwoComponent } from './participantes-two.component';

describe('ParticipantesTwoComponent', () => {
  let component: ParticipantesTwoComponent;
  let fixture: ComponentFixture<ParticipantesTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantesTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantesTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
