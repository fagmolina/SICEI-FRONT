import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewUser, NewInvestigador } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FormularioNuevoUsuarioInvestigadorService {
  newUsuarioForm = new BehaviorSubject<NewUser>(null);
  newInvestigadorForm = new BehaviorSubject<NewInvestigador>(null);
  newUnidadForm = new BehaviorSubject<any>(null);

  constructor() {}
}
