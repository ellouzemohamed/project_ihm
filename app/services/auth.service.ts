import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  options: any;
  global = new Global();
  constructor(
    private http: HttpClient
  ) {
    this.options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    };
  }

  // tslint:disable-next-line:typedef
  login(email: string, passd: string) {
    return this.http.post(this.global.apiURL + 'oauth/token', {
      grant_type: 'password',
      client_id: '2',
      client_secret: '40I8QXvWEHMv97eJM9PYXB8WTLTN6eP5KYaxAWUe',
      username: email,
      password: passd,
      scope: ''
    }, this.options);
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.options.headers.Authorization = 'Bearer ' + localStorage.getItem('access_token');
    return this.http.get(this.global.apiURL + 'api/token/revoke', this.options);
  }
}
