import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem, CarouselItem } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  toggleMainMenu = new BehaviorSubject<boolean>(false);
  menuItems = new BehaviorSubject<MenuItem[]>([]);
  carouselItems = new BehaviorSubject<CarouselItem[]>([]);
  constructor() { }
}
