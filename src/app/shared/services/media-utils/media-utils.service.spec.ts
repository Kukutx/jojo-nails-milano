import { TestBed } from '@angular/core/testing';

import { MediaUtilsService } from './media-utils.service';

describe('MediaUtilsService', () => {
  let service: MediaUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
