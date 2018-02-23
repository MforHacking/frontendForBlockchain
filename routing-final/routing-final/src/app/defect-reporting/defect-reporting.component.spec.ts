import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectReportingComponent } from './defect-reporting.component';

describe('DefectReportingComponent', () => {
  let component: DefectReportingComponent;
  let fixture: ComponentFixture<DefectReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefectReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
