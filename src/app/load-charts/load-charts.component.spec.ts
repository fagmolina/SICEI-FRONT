import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadChartsComponent } from './load-charts.component';

describe('LoadChartsComponent', () => {
  let component: LoadChartsComponent;
  let fixture: ComponentFixture<LoadChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
