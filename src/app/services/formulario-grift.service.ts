import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GriftStepper, TheForm } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FormularioGRIFTService {
  theForm = new BehaviorSubject<TheForm>(null);
  griftStepper = new BehaviorSubject<GriftStepper>(null);

  constructor() {}
}
