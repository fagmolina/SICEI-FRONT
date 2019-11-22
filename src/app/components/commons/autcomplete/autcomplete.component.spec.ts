import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutcompleteComponent } from './autcomplete.component';

describe('AutcompleteComponent', () => {
  let component: AutcompleteComponent;
  let fixture: ComponentFixture<AutcompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutcompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutcompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
