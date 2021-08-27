import { TestBed } from '@angular/core/testing';

import { BluescriptServiceService } from './bluescript-service.service';

describe('BluescriptServiceService', () => {
  let service: BluescriptServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BluescriptServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
