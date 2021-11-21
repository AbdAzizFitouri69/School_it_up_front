import { TestBed } from '@angular/core/testing';

import { ExempleServiceService } from './exemple-service.service';

describe('ExempleServiceService', () => {
  let service: ExempleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExempleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
