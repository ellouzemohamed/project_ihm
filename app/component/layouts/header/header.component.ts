import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/app/global';
import { ServicesService } from 'src/app/services/services.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JwtHelperService } from 'src/app/services/jwt-helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  services = null ;
  constructor(private service: ServicesService  , private http: HttpClient , private sanitizer: DomSanitizer
    ,         private authService: AuthService , private router: Router, private jwt: JwtHelperService) {

      router.events.subscribe((val) => {
        this.id = this.jwt.id();
        this.mail = this.jwt.email();
        this.name = this.jwt.name();
    });

     }
  global =  new Global();
  notification = null;
  loading;
  id;
  mail = null;
  name ;
  i = 0 ;
  ngOnInit(): void {
    this.getServices();
    this.getnotification();
    this.id = this.jwt.id();
    this.mail = this.jwt.email();
    this.name = this.jwt.name();

  }
  // tslint:disable-next-line:typedef
  verif() {
    this.id = this.jwt.id();
    this.mail = this.jwt.email();
    this.name = this.jwt.name();
    return this.id && this.id !== 0;
  }
  // tslint:disable-next-line:typedef
  getServices() {
    this.service.getServices().subscribe(success => {
      console.log(success);
      this.services =  Object(success).services;
    } , error => {
      console.log(error);

    });
  }
  // tslint:disable-next-line:typedef
  getnotification() {
    this.http.get(this.global.apiURL + 'api/notification').subscribe(success => {
      this.notification = success;
    } , error => {
      console.log(error);
    });
  }
  // tslint:disable-next-line:typedef
  setnotification() {
    let message = '';
    for (let index = 0; index < 5; index++) {
      // tslint:disable-next-line:max-line-length
      if (this.notification.actualite.length > index && this.notification.actualite[index].date_pub >  this.notification.service[index].created_at) {
        // tslint:disable-next-line:max-line-length
        message += '<li><a href="/actualite/' + this.notification.actualite[index].id + '">Nouvelle Actualité : <br> ' + this.notification.actualite[index].titre + ' </a></li>';
      } else {
        if (this.notification.service.length > index) {
          // tslint:disable-next-line:max-line-length
          message += '<li><a href="service/' + this.notification.service[index].id_service + '">Nouvelle Service : ' +  this.notification.service[index].nom_service + '</a></li>';
        }
      }
    }
    return this.sanitizer.bypassSecurityTrustHtml(message);
  }


  logout(): void {
    this.loading = true;
    this.id = 0 ;
    this.loading = false;
    localStorage.removeItem('access_token');
    this.router.navigate(['/']);
  }



  // tslint:disable-next-line:typedef
  dropmenuprofile() {

      if ( this.i === 1 ){
          document.getElementById('menuprofile').style.display = 'none' ;

          this.i--;
      }else {
          document.getElementById('menuprofile').style.display = 'block' ;
          this.i++;
      }

  }

}
