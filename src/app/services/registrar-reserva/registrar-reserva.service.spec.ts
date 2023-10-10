import { TestBed } from '@angular/core/testing';

import { RegistrarReservaService } from './registrar-reserva.service';

describe('RegistrarReservaService', () => {
  let service: RegistrarReservaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarReservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
