import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemilleroBasicoComponent } from './semillero-basico.component';

describe('SemilleroBasicoComponent', () => {
  let component: SemilleroBasicoComponent;
  let fixture: ComponentFixture<SemilleroBasicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemilleroBasicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemilleroBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
