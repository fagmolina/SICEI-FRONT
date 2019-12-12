import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrindRLCTComponent } from './grind-rlct.component';

describe('GrindRLCTComponent', () => {
  let component: GrindRLCTComponent;
  let fixture: ComponentFixture<GrindRLCTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrindRLCTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrindRLCTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
