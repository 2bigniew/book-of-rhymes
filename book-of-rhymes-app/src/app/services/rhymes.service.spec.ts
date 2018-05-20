import { TestBed, inject } from '@angular/core/testing';

import { RhymesService } from './rhymes.service';

describe('RhymesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RhymesService]
    });
  });

  it('should be created', inject([RhymesService], (service: RhymesService) => {
    expect(service).toBeTruthy();
  }));
});
