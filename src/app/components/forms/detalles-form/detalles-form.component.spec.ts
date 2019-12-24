import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesFormComponent } from './detalles-form.component';

describe('DetallesFormComponent', () => {
  let component: DetallesFormComponent;
  let fixture: ComponentFixture<DetallesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
