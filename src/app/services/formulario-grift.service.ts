import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GriftStepper } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FormularioGRIFTService {
  theForm = new BehaviorSubject<{}>(null);
  griftStepper = new BehaviorSubject<GriftStepper>(null);

  constructor() {}
}