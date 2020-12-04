import { TestBed } from '@angular/core/testing';

import { SimpleserviceService } from './simpleservice.service';

describe('SimpleserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleserviceService = TestBed.get(SimpleserviceService);
    expect(service).toBeTruthy();
  });
});
