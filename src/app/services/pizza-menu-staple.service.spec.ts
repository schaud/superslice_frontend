import { TestBed } from '@angular/core/testing';

import { PizzaMenuStapleService } from './pizza-menu-staple.service';

describe('PizzaMenuStapleService', () => {
  let service: PizzaMenuStapleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaMenuStapleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
