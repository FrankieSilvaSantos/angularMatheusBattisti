import { TestBed } from '@angular/core/testing';

import { ListApiRenderService } from './list-api-render.service';

describe('ListApiRenderService', () => {
  let service: ListApiRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListApiRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
