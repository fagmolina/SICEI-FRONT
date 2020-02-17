import { TestBed } from '@angular/core/testing';

import { FormularioSemilleroService } from './formulario-semillero.service';

describe('FormularioSemilleroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormularioSemilleroService = TestBed.get(FormularioSemilleroService);
    expect(service).toBeTruthy();
  });
});
