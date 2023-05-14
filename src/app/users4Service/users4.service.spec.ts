import { TestBed } from '@angular/core/testing';

import { Users4Service } from './users4.service';

describe('Users4Service', () => {
  let service: Users4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Users4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
