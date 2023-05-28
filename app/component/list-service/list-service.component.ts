import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Global } from 'src/app/global';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  servicesData = null;
  constructor(private services: ServicesService ) { }
  global =  new Global();

  ngOnInit(): void {
    this.getServices();
  }

  // tslint:disable-next-line:typedef
  getServices() {
    this.services.getServices().subscribe(success => {
      console.log(success);
      this.servicesData =  Object(success).services;
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
    return text.substr(0, 150) + '...';
  }
}
