import { TestBed } from '@angular/core/testing';

import { ClockifyService } from './clockify.service';

describe('ClockifyService', () => {
  let service: ClockifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClockifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
