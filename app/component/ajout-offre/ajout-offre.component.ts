import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/app/global';

@Component({
  selector: 'app-ajout-offre',
  templateUrl: './ajout-offre.component.html',
  styleUrls: ['./ajout-offre.component.css']
})
export class AjoutOffreComponent implements OnInit {
  listeService = null ;
  successControll;
  errors;
  selectedFile: File;
  images = [] ;
  formdata = new FormGroup({
    nom: new FormControl('', [Validators.min(3) ]),
    description: new FormControl('', [Validators.min(10) ]),
    images: new FormControl('' ),
    service: new FormControl(''),
    date_exp: new FormControl(''),
 });
 global = new Global();

  constructor(private services: ServicesService, private http: HttpClient ) { }

  ngOnInit(): void {
    this.getServices();
  }

  // tslint:disable-next-line:typedef
  getServices() {
    this.services.getServices().subscribe(success => {
      console.log(success);
      this.listeService =  Object(success).services;
    } , error => {
      console.log(error);

    });
  }


  // tslint:disable-next-line:typedef
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  // tslint:disable-next-line:typedef
  onSelectFile(event) { // called each time file input changes
    for (let index = 0; index < event.target.files.length; index++) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[index]); // read file as data url

      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.images[index] = event.target.result;
      };


    }

}


  // tslint:disable-next-line:typedef
  setOffre(){

    this.formdata.patchValue({
      images: this.images
   });

    this.http.post(this.global.apiURL + 'api/new/appel/offre' , this.formdata.value).subscribe(sucess => {
      this.successControll = true;
      this.errors = null;
      this.formdata.reset();
      window.open("https://www.kpulse.fr/public/ressources/devis/thumbnails/devis_word_7_page-0001.jpg", "_blank");
    }, error  => {
      this.errors = JSON.parse(Object(error).error.error);
      console.log(error);
    });
  }

}
