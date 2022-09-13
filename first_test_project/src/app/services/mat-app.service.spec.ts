import { TestBed } from '@angular/core/testing';

import { MatAppService } from './mat-app.service';

describe('MatAppService', () => {
  let service: MatAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
