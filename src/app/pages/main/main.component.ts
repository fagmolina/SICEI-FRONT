import { Component, OnInit, Input } from '@angular/core';
import { ComponentsService } from 'src/app/services/components.service';

import { carouselItems } from '../../mockData/mockData';
import { REAL_MENU_ITEMS } from '../../menuItems';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() isLogged: any;
  toggle = false;


  constructor(
    private componentService: ComponentsService
    ) {}

  ngOnInit() {
    this.componentService.menuItems.next(REAL_MENU_ITEMS);
    this.componentService.carouselItems.next(carouselItems);
    this.componentService.toggleMainMenu.subscribe(val => {
      this.toggle = val;
    });
  }
}
