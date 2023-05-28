import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/global';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  global = new Global();
  data;
  ngOnInit(): void {
    this.getData();
  }

  // tslint:disable-next-line:typedef
  expImage(image) {
    return image.split(',')[0];
  }
  // tslint:disable-next-line:typedef
  substrText(Text , nb , nb1) {
    return Text.substr(nb, nb1);
  }

    // tslint:disable-next-line:typedef
  getData(){

      this.http.get(this.global.apiURL + 'api/welcome' ).subscribe(sucess => {
        console.log(sucess);
        this.data = sucess;
      }, error  => {
        console.log(error);
      });
  }
}
