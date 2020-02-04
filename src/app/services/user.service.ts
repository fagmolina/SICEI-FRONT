import { Usuario } from './../models/user.class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public pathapi = 'http://localhost:60406/api/usuario/login';

  constructor(private http: HttpClient) { }

  public login(user: Usuario) {
     return this.http.post(this.pathapi , user, { });
  }
}
