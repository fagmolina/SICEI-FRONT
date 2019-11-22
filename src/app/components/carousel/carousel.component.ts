import { Component, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/services/components.service';
import { CarouselItem } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  items: CarouselItem[] = [];
  active = 0;
  constructor(private componentService: ComponentsService) {}

  ngOnInit() {
    this.componentService.carouselItems.subscribe(items => {
      this.items = items;
    });
  }

  next() {
    this.active = this.active < this.items.length - 1 ? this.active += 1 : 0;
  }

  prev() {
    console.log('prev');
    this.active = this.active > 0 ? this.active -= 1 : this.items.length - 1;
  }
}
