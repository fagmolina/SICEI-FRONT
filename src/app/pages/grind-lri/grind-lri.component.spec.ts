import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrindLRIComponent } from './grind-lri.component';

describe('GrindLRIComponent', () => {
  let component: GrindLRIComponent;
  let fixture: ComponentFixture<GrindLRIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrindLRIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrindLRIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
