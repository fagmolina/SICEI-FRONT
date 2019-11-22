import { Component, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/services/components.service';

import { menuItems, carouselItems } from '../../mockData/mockData';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  toggle = false;

  constructor(private componentService: ComponentsService) {}

  ngOnInit() {
    this.componentService.menuItems.next(menuItems);
    this.componentService.carouselItems.next(carouselItems);
    this.componentService.toggleMainMenu.subscribe(val => {
      this.toggle = val;
    });
  }
}
