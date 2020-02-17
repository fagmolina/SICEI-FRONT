import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Sicei';
  isLogged: boolean;

  constructor(
    private _userService: UserService,
    private router: Router,
  ){
    _userService.isLogged.next(false);
    this.isLogged = false;
  }

  ngOnInit(){
    this._userService.isLogged.subscribe( data => {

      this.isLogged = true //<boolean>data;
      //this.router.navigateByUrl('/home');
      //this.isLogged = true;
    });
  }
}
