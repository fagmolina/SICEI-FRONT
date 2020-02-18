import { User } from './../../models/user.class';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/user.class';
import { Router } from '@angular/router';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  user = new Usuario();
  usuariologin = new User();
  constructor(
    public fb: FormBuilder,
    private _userservice: UserService,
    private router: Router,
    private _componentservice: ComponentsService
  ) {}

  ngOnInit() {
    this.reactiveForm();
    this.routerSubscription();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      usuario: [undefined, Validators.required],
      contraseña: [undefined, Validators.required]
    });
  }

  routerSubscription() {
    this.router.events.subscribe(x => {
      // tslint:disable-next-line: no-string-literal
      if (x['url'] === '/') {
        localStorage.clear();
      }
    });
  }

  submitForm = () => {
    if (this.myForm.valid) {
      this.user.Username = this.myForm.controls.usuario.value;
      this.user.Password = this.myForm.controls.contraseña.value;
      this._userservice.login(this.user).subscribe((data: any) => {
        if (data) {
          // debugger;
          this.usuariologin = data;
          sessionStorage.setItem('user', JSON.stringify(this.usuariologin));
          this._componentservice.user.next(this.usuariologin);
          this._userservice.isLogged.next(true);
          localStorage.setItem('isLogged', 'true');
          this.router.navigate(['/home']);
        } else {
          alert('Datos inválidos');
        }
      });
    } else {
      alert('Ingrese todos los campos');
      this._userservice.isLogged.next(false);
    }
  };
}
