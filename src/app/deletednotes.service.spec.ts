import { TestBed } from '@angular/core/testing';

import { DeletednotesService } from './deletednotes.service';

describe('DeletednotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeletednotesService = TestBed.get(DeletednotesService);
    expect(service).toBeTruthy();
  });
});
