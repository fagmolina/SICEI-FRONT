import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GriftFormConfirmComponent } from './grift-form-confirm.component';

describe('GriftFormConfirmComponent', () => {
  let component: GriftFormConfirmComponent;
  let fixture: ComponentFixture<GriftFormConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GriftFormConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GriftFormConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
