import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNumberComponent } from './order-number.component';

describe('OrderNumberComponent', () => {
  let component: OrderNumberComponent;
  let fixture: ComponentFixture<OrderNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
