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
  timer;
  constructor(private componentService: ComponentsService) { }

  ngOnInit() {
    this.componentService.carouselItems.subscribe(items => {
      this.items = items;
    });
    this.timer = window.setInterval(() => {
      this.next_automatic();
    }, 4500);
  }

  next_automatic() {
    this.active = this.active < this.items.length - 1 ? this.active += 1 : 0;
  }

  next() {
    window.clearInterval(this.timer);
    this.active = this.active < this.items.length - 1 ? this.active += 1 : 0;
    this.timer = window.setInterval(() => {
      this.next_automatic();
    }, 4500);
  }

  prev() {
    console.log('prev');
    this.active = this.active > 0 ? this.active -= 1 : this.items.length - 1;
  }

  gotoItem(bullet, index) {
    this.active = index;
  }
}
