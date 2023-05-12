import { TestBed } from '@angular/core/testing';

import { ListGamesServiceService } from './list-games-service.service';

describe('ListGamesServiceService', () => {
  let service: ListGamesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListGamesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
