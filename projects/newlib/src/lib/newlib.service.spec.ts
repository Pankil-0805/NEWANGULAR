import { TestBed } from '@angular/core/testing';

import { NewlibService } from './newlib.service';

describe('NewlibService', () => {
  let service: NewlibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewlibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
