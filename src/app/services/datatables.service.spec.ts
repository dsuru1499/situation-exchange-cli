import { TestBed, inject } from '@angular/core/testing';

import { DatatablesService } from './datatables.service';

describe('DatatableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatatablesService]
    });
  });

  it('should be created', inject([DatatablesService], (service: DatatablesService) => {
    expect(service).toBeTruthy();
  }));
});
