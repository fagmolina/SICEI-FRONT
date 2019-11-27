import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoInvesFormComponent } from './producto-inves-form.component';

describe('ProductoInvesFormComponent', () => {
  let component: ProductoInvesFormComponent;
  let fixture: ComponentFixture<ProductoInvesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoInvesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoInvesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
