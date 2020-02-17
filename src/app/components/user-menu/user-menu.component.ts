import { Component, OnInit } from '@angular/core';
import * as constantes from '../../constantes';
import { ComponentsService } from 'src/app/services/components.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  constantes = constantes;

  constructor(
    private _componentservice: ComponentsService,
    private _userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout(){
    sessionStorage.clear();
    this._componentservice.user.next(null);
    this._userService.isLogged.next(false);
    this.router.navigateByUrl('/login');
  }

}
