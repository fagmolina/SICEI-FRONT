import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  toggleMainMenu = new BehaviorSubject<boolean>(false);
  constructor() { }
}
