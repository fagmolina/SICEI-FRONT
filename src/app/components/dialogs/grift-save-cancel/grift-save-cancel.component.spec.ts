import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GriftSaveCancelComponent } from './grift-save-cancel.component';

describe('GriftSaveCancelComponent', () => {
  let component: GriftSaveCancelComponent;
  let fixture: ComponentFixture<GriftSaveCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GriftSaveCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GriftSaveCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
