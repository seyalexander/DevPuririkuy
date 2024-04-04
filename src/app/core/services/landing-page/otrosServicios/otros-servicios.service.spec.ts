import { TestBed } from '@angular/core/testing';

import { OtrosServiciosService } from './otros-servicios.service';

describe('OtrosServiciosService', () => {
  let service: OtrosServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtrosServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
