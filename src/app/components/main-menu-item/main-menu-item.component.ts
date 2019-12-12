import { Component, OnInit, Input } from '@angular/core';
import { Submenu } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-main-menu-item',
  templateUrl: './main-menu-item.component.html',
  styleUrls: ['./main-menu-item.component.scss']
})
export class MainMenuItemComponent implements OnInit {
  @Input() icon: 'string';
  @Input() title: 'string';
  @Input() width: 'number';
  @Input() heigth: 'number';
  @Input() submenu: Submenu[];
  @Input() link: string;

  constructor() { }

  ngOnInit() {}

}
