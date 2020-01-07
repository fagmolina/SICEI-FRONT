import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/interfaces';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainMenuComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private componentService: ComponentsService) { }

  ngOnInit() {
    this.items = this.componentService.menuItems.value;
  }

}
