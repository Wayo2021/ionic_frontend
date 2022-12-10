import { TestBed } from '@angular/core/testing';

import { DrinkrewardService } from './drinkreward.service';

describe('DrinkrewardService', () => {
  let service: DrinkrewardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkrewardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
