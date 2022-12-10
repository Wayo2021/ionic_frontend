import { TestBed } from '@angular/core/testing';

import { UploadImagecustomersService } from './upload-imagecustomers.service';

describe('UploadImagecustomersService', () => {
  let service: UploadImagecustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadImagecustomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
