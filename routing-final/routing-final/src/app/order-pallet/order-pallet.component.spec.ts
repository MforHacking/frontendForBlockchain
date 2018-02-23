import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPalletComponent } from './order-pallet.component';

describe('OrderPalletComponent', () => {
  let component: OrderPalletComponent;
  let fixture: ComponentFixture<OrderPalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
