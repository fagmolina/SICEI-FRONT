import { User } from './../../models/user.class';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/user.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  user = new Usuario();
  usuariologin = new User();
  constructor(public fb: FormBuilder,private _userservice: UserService, private router: Router) { }

  ngOnInit() {
    this.reactiveForm();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      usuario: [undefined,Validators.required],
      contraseña: [undefined, Validators.required]      
    })
  }

  submitForm = () => {
    if (this.myForm.valid) {
      this.user.Username = this.myForm.controls.usuario.value;
      this.user.Password = this.myForm.controls.contraseña.value;
        this._userservice.login(this.user).subscribe( (data: any) => {
          if (data) {
            debugger;
            this.usuariologin = data;
            sessionStorage.setItem('user',JSON.stringify(this.usuariologin));
            this.router.navigateByUrl('/home');
          }
        })
    } else {
      alert('Ingrese todos los campos');
    }
  }

}
