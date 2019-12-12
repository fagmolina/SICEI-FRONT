import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreitPropiedadIntelectualComponent } from './greit-propiedad-intelectual.component';

describe('GreitPropiedadIntelectualComponent', () => {
  let component: GreitPropiedadIntelectualComponent;
  let fixture: ComponentFixture<GreitPropiedadIntelectualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreitPropiedadIntelectualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreitPropiedadIntelectualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
