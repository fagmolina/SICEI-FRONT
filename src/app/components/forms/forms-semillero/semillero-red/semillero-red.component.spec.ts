import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemilleroRedComponent } from './semillero-red.component';

describe('SemilleroRedComponent', () => {
  let component: SemilleroRedComponent;
  let fixture: ComponentFixture<SemilleroRedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemilleroRedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemilleroRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
