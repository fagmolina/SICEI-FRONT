import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewUser } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FormularioNuevoUsuarioInvestigadorService {
  newUsuarioForm = new BehaviorSubject<NewUser>(null);
  newInvestigadorForm = new BehaviorSubject<any>(null);
  newUnidadForm = new BehaviorSubject<any>(null);

  constructor() {}
}
