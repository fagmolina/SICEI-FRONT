import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
