import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadoresDialogComponent } from './investigadores-dialog.component';

describe('InvestigadoresDialogComponent', () => {
  let component: InvestigadoresDialogComponent;
  let fixture: ComponentFixture<InvestigadoresDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigadoresDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadoresDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
