import { TestBed, inject } from '@angular/core/testing';

import { SituationExchangeService } from './situation-exchange.service';

describe('SituationExchangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SituationExchangeService]
    });
  });

  it('should be created', inject([SituationExchangeService], (service: SituationExchangeService) => {
    expect(service).toBeTruthy();
  }));
});
