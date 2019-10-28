import { TestBed } from '@angular/core/testing';

import { RedditdataService } from './redditdata.service';

describe('RedditdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedditdataService = TestBed.get(RedditdataService);
    expect(service).toBeTruthy();
  });
});
