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
  constructor(private componentService: ComponentsService) { }

  ngOnInit() {
    this.componentService.carouselItems.subscribe(items => this.items = items);
  }

}
