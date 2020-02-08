import { TestBed } from '@angular/core/testing';

import { FormularioGRIFTService } from './formulario-grift.service';

describe('FormularioGRIFTService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormularioGRIFTService = TestBed.get(FormularioGRIFTService);
    expect(service).toBeTruthy();
  });
});
