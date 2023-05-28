import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/app/global';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-detailleactualite',
  templateUrl: './detailleactualite.component.html',
  styleUrls: ['./detailleactualite.component.css']
})
export class DetailleactualiteComponent implements OnInit {

  constructor(private http: HttpClient , private route: ActivatedRoute , private router: Router ) { }
  global = new Global();
  data;
  id;
  formdata = new FormGroup({
    commentaire : new FormControl(''),

 });
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // tslint:disable-next-line:no-string-literal
      this.id = Object(params).params.id;
      this.getData();
    });
  }

  // tslint:disable-next-line:typedef
  onClickSubmit() {
        this.http.post(this.global.apiURL + 'api/actualite/' + this.id , this.formdata.value).subscribe(sucess => {
          this.formdata.reset();
          this.getData();
      }, error  => {
        console.log(error);

      });
  }

  // tslint:disable-next-line:typedef
  getData(){

    this.http.get(this.global.apiURL + 'api/actualite/' + this.id ).subscribe(sucess => {
      console.log(sucess);
      this.data = sucess;
    }, error  => {
      console.log(error);
    });
}
}
