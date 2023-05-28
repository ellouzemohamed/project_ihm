import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/global';
import { FournisseurService } from 'src/app/fournisseur.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private founisseur: FournisseurService  ) { }
  global =  new Global();
  fournisseurs = null ;
  services = null;
  searchNom = '';
  searchService = '';
  ngOnInit(): void {
    this.getFournisseurs('' , '');
  }

  // tslint:disable-next-line:typedef
  getFournisseurs(search , service) {
    this.founisseur.getFournisseurs(search , service).subscribe(success => {
      this.fournisseurs =  Object(success).fournisseurs;
      this.services =  Object(success).services;
      this.sertMap();

    } , error => {

    });
  }
  // tslint:disable-next-line:typedef
  getImage(text) {
    // tslint:disable-next-line:no-unused-expression
    return this.global.apiURL + text;
  }
  // tslint:disable-next-line:typedef
  SubstrService(text) {
    return text.substr(0, 150) + '...';
  }

  // tslint:disable-next-line:typedef
  setInput(nom) {
    this.searchNom = nom ;
    this.getFournisseurs(this.searchNom , this.searchService);

  }
  // tslint:disable-next-line:typedef
  setSelect(nom) {
    this.searchService = nom ;
    this.getFournisseurs(this.searchNom , this.searchService);

  }
  // tslint:disable-next-line:typedef
  sertMap() {
       // GOOGLE MAP FUNCTION
       const fourn = this.fournisseurs;
       this.initMap(fourn);
  }
  // tslint:disable-next-line:typedef
  initMap(fourn) {
    const uluru = {lat: 34.747847, lng: 10.766163};
    const map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 13,
        center: uluru
    });

    fourn.forEach(element => {

        const contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">' + element.nom_fourn + '</h1>' +
        '<div id="bodyContent">' +
        '<p>' + element.service.nom_service + '</p>' +
        '</div>' +
        '</div>';
        const infowindow = new google.maps.InfoWindow({
            content: contentString
        });


        this.addMarker ({
              lat : parseFloat(element.lat),
              lng : parseFloat(element.lng)
          }, map , contentString);
    });
  }

  // tslint:disable-next-line:typedef
  addMarker(location, maps, contentString) {
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.
    const infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    const marker = new google.maps.Marker({
        position: location,
        map: maps
    });


    // tslint:disable-next-line:only-arrow-functions , typedef
    marker.addListener('click', function() {
        infowindow.open(maps, marker);
    });
    // Call to initMap function
    }

}
