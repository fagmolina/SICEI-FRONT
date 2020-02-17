import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemilleroConfirmComponent } from './semillero-confirm.component';

describe('SemilleroConfirmComponent', () => {
  let component: SemilleroConfirmComponent;
  let fixture: ComponentFixture<SemilleroConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemilleroConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemilleroConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
