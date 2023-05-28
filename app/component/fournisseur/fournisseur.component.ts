import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/global';
import { FournisseurService } from 'src/app/fournisseur.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {


  constructor(private fournisseurService: FournisseurService , private route: ActivatedRoute , private sanitizer: DomSanitizer) {
  }
  global =  new Global();
  id = null;
  note = null;
  fournisseur = null;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // tslint:disable-next-line:no-string-literal
      this.id = Object(params).params.id;
      this.getFournisseur();
    });
  }


  // tslint:disable-next-line:typedef
  getFournisseur() {
    this.fournisseurService.getFournisseur(this.id).subscribe(success => {
      console.log(success);
      this.fournisseur =  Object(success).fournisseur;
      this.note = Object(success).note;
    } , error => {
     // console.log(error);

    });
  }

  // tslint:disable-next-line:typedef
  setRate() {
    let message  = '';
    for (let index = 0; index < 5; index++) {
      if (index < this.note) {
        message += '<a  style="    display: inline;    background: none;" ><i style=" color: gold;background: none;border: none;font-size: 25px" class="fa fa-star" aria-hidden="true"></i></a>' ;
      }else {
        message += '<a  style="    display: inline;    background: none;" > <i style=" color: gold;background: none;border: none;font-size: 25px" class="fa fa-star-o" aria-hidden="true"></i></a>';
      }
    }
    return this.sanitizer.bypassSecurityTrustHtml(message);


  }


}
