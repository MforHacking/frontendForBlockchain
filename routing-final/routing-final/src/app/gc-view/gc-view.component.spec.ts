import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcViewComponent } from './gc-view.component';

describe('GcViewComponent', () => {
  let component: GcViewComponent;
  let fixture: ComponentFixture<GcViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
