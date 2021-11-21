import { TestBed } from '@angular/core/testing';

import { SuperviseurServiceService } from './superviseur-service.service';

describe('SuperviseurServiceService', () => {
  let service: SuperviseurServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperviseurServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
