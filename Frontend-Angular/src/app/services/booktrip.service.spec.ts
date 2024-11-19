import { TestBed } from '@angular/core/testing';

import { BooktripService } from './booktrip.service';

describe('BooktripService', () => {
  let service: BooktripService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooktripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
