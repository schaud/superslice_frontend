import { TestBed } from '@angular/core/testing';

import { OrderNumberServiceService } from './order-number-service.service';

describe('OrderNumberServiceService', () => {
  let service: OrderNumberServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderNumberServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
