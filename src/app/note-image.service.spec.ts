import { TestBed } from '@angular/core/testing';

import { NoteImageService } from './note-image.service';

describe('NoteImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteImageService = TestBed.get(NoteImageService);
    expect(service).toBeTruthy();
  });
});
