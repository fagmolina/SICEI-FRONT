import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioGRIFTService {
  theForm = new BehaviorSubject<{}>(null);

  constructor() { }
}
