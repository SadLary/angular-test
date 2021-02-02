/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SmileServiceService } from './smile-service.service';

describe('Service: SmileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmileServiceService]
    });
  });

  it('should ...', inject([SmileServiceService], (service: SmileServiceService) => {
    expect(service).toBeTruthy();
  }));
});
