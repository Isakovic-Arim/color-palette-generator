import { TestBed } from '@angular/core/testing';

import { ColorExchangeService } from './color-exchange.service';

describe('ColorExchangeService', () => {
  let service: ColorExchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorExchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
