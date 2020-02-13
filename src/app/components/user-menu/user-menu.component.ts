import { Component, OnInit } from '@angular/core';
import * as constantes from '../../constantes';
import { ComponentsService } from 'src/app/services/components.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  constantes = constantes;

  constructor(
    private _componentservice: ComponentsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout(){
    sessionStorage.clear();
    this._componentservice.user.next(null);
    this.router.navigateByUrl('/login');
  }

}
