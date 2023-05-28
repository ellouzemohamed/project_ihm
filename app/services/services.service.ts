import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  global =  new Global();
  constructor(private http: HttpClient) { }


  // tslint:disable-next-line:typedef
  getServices() {
    return this.http.get(this.global.apiURL + 'api/services');
  }

  // tslint:disable-next-line:typedef
  getService(id) {
    return this.http.get(this.global.apiURL + 'api/service/' + id);
  }
}
