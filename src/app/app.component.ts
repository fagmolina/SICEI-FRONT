import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Sicei';
  isLogged: boolean;

  constructor(
    private _userService: UserService
  ){
    _userService.isLogged.next(false);
    this.isLogged = false;
  }

  ngOnInit(){
    this._userService.isLogged.subscribe( data => {
      this.isLogged = <boolean>data;
    });
  }
}
