import { TestBed } from '@angular/core/testing';

import { PagarReservaService } from './pagar-reserva.service';

describe('PagarReservaService', () => {
  let service: PagarReservaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagarReservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
