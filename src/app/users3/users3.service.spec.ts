import { TestBed } from '@angular/core/testing';

import { Users3Service } from './users3.service';

describe('Users3Service', () => {
  let service: Users3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Users3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
