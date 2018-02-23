import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletManagmentComponent } from './palet-managment.component';

describe('PaletManagmentComponent', () => {
  let component: PaletManagmentComponent;
  let fixture: ComponentFixture<PaletManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaletManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaletManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
