import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/app/global';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  global = new Global() ;
  errors;
  successControll;
  constructor(private http: HttpClient) { }
  formdata = new FormGroup({
    email: new FormControl('', [Validators.email]),
    nom: new FormControl('', [Validators.min(3) ]),
    sujet: new FormControl('', [Validators.min(6) ]),
    message: new FormControl('', [Validators.min(9) ]),
    numero: new FormControl('', [Validators.min(8) ])
 });
  ngOnInit(): void {
    this.initMap();
  }

  // tslint:disable-next-line:typedef
  onClickSubmit(data) {
    this.http.post(this.global.apiURL + 'api/contact' , this.formdata.value).subscribe(sucess => {
        this.successControll = true;
        this.errors = null;
        this.formdata.reset();
    }, error  => {
       this.errors = JSON.parse(Object(error).error.error);
    });

  }




  // tslint:disable-next-line:typedef
  initMap() {
      const uluru = {lat: 34.799035, lng: 10.7545899};
      const maps = new google.maps.Map(document.getElementById('googleMap'), {
          zoom: 15,
          center: uluru
      });
      const marker = new google.maps.Marker({
          position: uluru,
          map: maps
      });
  }

}
