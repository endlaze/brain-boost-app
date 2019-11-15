import { TestBed } from '@angular/core/testing';

import { FormAService } from './form-a.service';

describe('FormAService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormAService = TestBed.get(FormAService);
    expect(service).toBeTruthy();
  });
});
