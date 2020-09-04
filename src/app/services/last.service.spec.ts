import { TestBed } from '@angular/core/testing';

import { LastService } from './last.service';

describe('LastService', () => {
  let service: LastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
