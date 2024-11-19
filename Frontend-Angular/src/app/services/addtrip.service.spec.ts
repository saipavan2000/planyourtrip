import { TestBed } from '@angular/core/testing';

import { AddtripService } from './addtrip.service';

describe('AddtripService', () => {
  let service: AddtripService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddtripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
