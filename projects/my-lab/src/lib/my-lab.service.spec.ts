import { TestBed, inject } from '@angular/core/testing';

import { MyLabService } from './my-lab.service';

describe('MyLabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyLabService]
    });
  });

  it('should be created', inject([MyLabService], (service: MyLabService) => {
    expect(service).toBeTruthy();
  }));
});
