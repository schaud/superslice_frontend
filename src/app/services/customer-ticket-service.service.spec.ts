import { TestBed } from '@angular/core/testing';

import { CustomerTicketServiceService } from './customer-ticket-service.service';

describe('CustomerTicketServiceService', () => {
  let service: CustomerTicketServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerTicketServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
