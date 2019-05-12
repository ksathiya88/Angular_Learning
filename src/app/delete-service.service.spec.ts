import { TestBed } from '@angular/core/testing';

import { DeleteServiceService } from './delete-service.service';

describe('DeleteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteServiceService = TestBed.get(DeleteServiceService);
    expect(service).toBeTruthy();
  });
});
