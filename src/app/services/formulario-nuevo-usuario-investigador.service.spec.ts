import { TestBed } from '@angular/core/testing';

import { FormularioNuevoUsuarioInvestigadorService } from './formulario-nuevo-usuario-investigador.service';

describe('FormularioNuevoUsuarioInvestigadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormularioNuevoUsuarioInvestigadorService = TestBed.get(FormularioNuevoUsuarioInvestigadorService);
    expect(service).toBeTruthy();
  });
});
