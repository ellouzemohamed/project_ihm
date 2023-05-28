import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {
  global =  new Global();
  constructor(private http: HttpClient) { }


  // tslint:disable-next-line:typedef
  getActualite(text) {
    return this.http.get(this.global.apiURL + '/api/actualite?titre=' + text);
  }

}
