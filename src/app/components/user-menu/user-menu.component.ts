import { Component, OnInit } from '@angular/core';
import * as constantes from '../../constantes';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  constantes = constantes;

  constructor() { }

  ngOnInit() {
  }

}
