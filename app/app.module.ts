import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { TeamComponent } from './component/team/team.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ListServiceComponent } from './component/list-service/list-service.component';
import { ServiceComponent } from './component/service/service.component';
import { ListeOffreComponent } from './component/liste-offre/liste-offre.component';
import { AjoutOffreComponent } from './component/ajout-offre/ajout-offre.component';
import { ListeAppelOffreComponent } from './component/liste-appel-offre/liste-appel-offre.component';
import { ActualiteComponent } from './component/actualite/actualite.component';
import { DetailleactualiteComponent } from './component/detailleactualite/detailleactualite.component';
import { ContactComponent } from './component/contact/contact.component';
import { HeaderComponent } from './component/layouts/header/header.component';
import { FooterComponent } from './component/layouts/footer/footer.component';
import { ActualiteService } from './services/actualite.service';
import { ServicesService } from './services/services.service';
import { FournisseurService } from './fournisseur.service';
import { GoogleMapsModule } from '@angular/google-maps';
import { FournisseurComponent } from './component/fournisseur/fournisseur.component';
import { AppelOffreService } from './services/appel-offre.service';
import { RegisterComponent } from './component/register/register.component';
import { AuthService } from './interceptors/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    ListServiceComponent,
    ServiceComponent,
    ListeOffreComponent,
    AjoutOffreComponent,
    ListeAppelOffreComponent,
    ActualiteComponent,
    DetailleactualiteComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    FournisseurComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ActualiteService , ServicesService , FournisseurService , AppelOffreService ,
    { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
