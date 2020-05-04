import { TestBed } from '@angular/core/testing';

import { PizzaRetrieverService } from './pizza-retriever.service';

describe('PizzaRetrieverService', () => {
  let service: PizzaRetrieverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaRetrieverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
