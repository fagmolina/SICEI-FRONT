import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimulosformComponent } from './estimulosform.component';

describe('EstimulosformComponent', () => {
  let component: EstimulosformComponent;
  let fixture: ComponentFixture<EstimulosformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimulosformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimulosformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
