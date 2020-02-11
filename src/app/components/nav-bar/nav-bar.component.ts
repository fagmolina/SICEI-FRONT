import { Component, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public user: string = '';
  public cargo: string = '';

  constructor(
    private _componentservice: ComponentsService
  ) { }

  ngOnInit() {
    this._componentservice.user.subscribe(user => {
      if(user){
        this.user = user.NOMBRES + ' ' + user.APELLIDOS;
        this.cargo = user.PERFIL.toString();
      }
    });
    let values = sessionStorage.getItem('user');
    console.log(values);
  }

}
