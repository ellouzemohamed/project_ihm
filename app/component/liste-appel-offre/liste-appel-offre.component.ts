import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { Global } from 'src/app/global';
import { AppelOffreService } from 'src/app/services/appel-offre.service';

@Component({
  selector: 'app-liste-appel-offre',
  templateUrl: './liste-appel-offre.component.html',
  styleUrls: ['./liste-appel-offre.component.css']
})
export class ListeAppelOffreComponent implements OnInit {

  appel = null;
  constructor(private services: AppelOffreService , private route: ActivatedRoute , private router: Router ) {
  }
  global =  new Global();
  id = null;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // tslint:disable-next-line:no-string-literal
      this.id = Object(params).params.id;
      this.getService();
    });

  }
  // tslint:disable-next-line:typedef
  getnewServices() {
    this.route.paramMap.subscribe(params => {

      // tslint:disable-next-line:no-string-literal
      this.id = Object(params).params.id;
    });
  }

  // tslint:disable-next-line:typedef
  getService() {
    this.services.getOffres().subscribe(success => {
      console.log(success);
      // this.servicesData =  Object(success).services;
      this.appel = Object(success).appel;
    } , error => {
      console.log(error);

    });
  }
  // tslint:disable-next-line:typedef
  getImage(text) {
    console.log(text.split(',')[0]);
    // tslint:disable-next-line:no-unused-expression
    return String(text).split(',')[0];
  }
  // tslint:disable-next-line:typedef
  SubstrService(text) {
    return text.substr(0, 10);
  }


}
