import { TestBed } from '@angular/core/testing';

import { PizzaFormService } from './pizza-form.service';

describe('PizzaFormService', () => {
  let service: PizzaFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
