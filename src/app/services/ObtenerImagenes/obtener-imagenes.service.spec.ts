import { TestBed } from '@angular/core/testing';

import { ObtenerImagenesService } from './obtener-imagenes.service';

describe('ObtenerImagenesService', () => {
  let service: ObtenerImagenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerImagenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
