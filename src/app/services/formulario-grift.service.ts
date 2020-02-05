import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { GriftStepper, TheForm } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FormularioGRIFTService {
  theForm = new BehaviorSubject<TheForm>(null);
  resetTheForm = new BehaviorSubject<boolean>(null);
  griftStepper = new BehaviorSubject<GriftStepper>(null);

  forms = new BehaviorSubject<TheForm[]>([]);
  formId = 0;

  constructor() {}

  addForm(data) {
    const formId = this.formId;
    data = {formId, ...data};
    this.forms.next([...this.forms.value, data]);
  }
}
