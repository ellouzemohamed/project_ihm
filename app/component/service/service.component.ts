import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/global';
import { ServicesService } from 'src/app/services/services.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  service = null;
  servicesData = null;
  constructor(private services: ServicesService , private route: ActivatedRoute , private router: Router ) {
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
    this.services.getService(this.id).subscribe(success => {
      console.log(success);
      this.servicesData =  Object(success).services;
      this.service = Object(success).service;
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
    return text.substr(0, 200);
  }

}
