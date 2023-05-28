import { Component, OnInit } from '@angular/core';
import { ActualiteService } from 'src/app/services/actualite.service';
import { Global } from '../../global';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent implements OnInit {
  actualiteData;
  pubData;
   global =  new Global();

  constructor(private actualite: ActualiteService) { }

  ngOnInit(): void {
    this.getActualite('');
  }
  // tslint:disable-next-line:typedef
  getActualite(text) {
    this.actualite.getActualite(text).subscribe(success => {
      this.actualiteData = Object(success).actualite;
      this.pubData =  Object(success).publicite.data;
      console.log(success);
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  setCherche(text) {
    console.log(text);
    this.getActualite(text);
  }
}
