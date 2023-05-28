import { Injectable } from '@angular/core';
import { Global } from '../global';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppelOffreService {
  global =  new Global();
  constructor(private http: HttpClient) { }


  // tslint:disable-next-line:typedef
  getOffres() {
    return this.http.get(this.global.apiURL + 'api/appel/offre');
  }


}
