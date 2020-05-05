import { TestBed } from '@angular/core/testing';

import { PizzaCustomizationService } from './pizza-customization.service';

describe('PizzaCustomizationService', () => {
  let service: PizzaCustomizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaCustomizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
