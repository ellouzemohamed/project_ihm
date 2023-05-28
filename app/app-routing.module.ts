import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ActualiteComponent } from './component/actualite/actualite.component';
import { ServiceComponent } from './component/service/service.component';
import { ListServiceComponent } from './component/list-service/list-service.component';
import { TeamComponent } from './component/team/team.component';
import { FournisseurComponent } from './component/fournisseur/fournisseur.component';
import { ListeAppelOffreComponent } from './component/liste-appel-offre/liste-appel-offre.component';
import { ContactComponent } from './component/contact/contact.component';
import { GuestGuardService } from './services/guest-guard.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AjoutOffreComponent } from './component/ajout-offre/ajout-offre.component';
import { DetailleactualiteComponent } from './component/detailleactualite/detailleactualite.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent   },
  { path: 'services', component: ListServiceComponent },
  { path: 'service/:id', component: ServiceComponent  },
  { path: 'actualite', component: ActualiteComponent  },
  { path: 'actualite/:id', component: DetailleactualiteComponent  },

  { path: 'fournisseurs', component: TeamComponent   },
  { path: 'fournisseur/:id', component: FournisseurComponent },
  { path: 'appel/offre', component: ListeAppelOffreComponent },
  { path: 'contact', component: ContactComponent},

  { path: 'ajout/offre', component: AjoutOffreComponent, canActivate: [ AuthGuardService ]},

  { path: '**', component: HomeComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
