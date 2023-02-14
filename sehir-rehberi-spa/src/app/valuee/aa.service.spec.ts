/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AaService } from './aa.service';

describe('Service: Aa', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AaService]
    });
  });

  it('should ...', inject([AaService], (service: AaService) => {
    expect(service).toBeTruthy();
  }));
});
