import { Injectable } from '@angular/core';
import { Global } from './global';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  global =  new Global();
  constructor(private http: HttpClient) { }


  // tslint:disable-next-line:typedef
  getFournisseurs(search , service) {
    return this.http.get(this.global.apiURL + 'api/team?search=' + search + '&service=' +  service);
  }

  // tslint:disable-next-line:typedef
  getFournisseur(id) {
    return this.http.get(this.global.apiURL + 'api/fournisseur/' + id);
  }

}
