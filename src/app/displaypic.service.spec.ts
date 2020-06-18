import { TestBed } from '@angular/core/testing';

import { DisplaypicService } from './displaypic.service';

describe('DisplaypicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplaypicService = TestBed.get(DisplaypicService);
    expect(service).toBeTruthy();
  });
});
