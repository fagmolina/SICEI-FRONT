import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormSemillero, SemilleroStepper } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FormularioSemilleroService {

  theForm = new BehaviorSubject<FormSemillero>(null);
  resetTheForm = new BehaviorSubject<boolean>(null);
  semilleroStepper = new BehaviorSubject<SemilleroStepper>(null);

  forms = new BehaviorSubject<FormSemillero[]>([]);
  formId = 0;

  constructor() { }

  addForm(data) {
    const formId = this.formId;
    data = {formId, ...data};
    this.forms.next([...this.forms.value, data]);
  }
}
