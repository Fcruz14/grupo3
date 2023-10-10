import { TestBed } from '@angular/core/testing';

import { ObtenerLugarService } from './obtener-lugar.service';

describe('ObtenerLugarService', () => {
  let service: ObtenerLugarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerLugarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
