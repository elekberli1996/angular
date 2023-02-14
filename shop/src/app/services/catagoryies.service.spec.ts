import { TestBed } from '@angular/core/testing';

import { CatagoryiesService } from './catagoryies.service';

describe('CatagoryiesService', () => {
  let service: CatagoryiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatagoryiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
