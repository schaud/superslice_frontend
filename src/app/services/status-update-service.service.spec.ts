import { TestBed } from '@angular/core/testing';

import { StatusUpdateServiceService } from './status-update-service.service';

describe('StatusUpdateServiceService', () => {
  let service: StatusUpdateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusUpdateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
