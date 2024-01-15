import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './main/liste/liste.component';
import { CreerComponent } from './main/creer/creer.component';
import { ModifierComponent } from './main/modifier/modifier.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path:"",component:AccueilComponent},
  {path:"liste",component:ListeComponent},
  {path:"creer",component:CreerComponent},
  {path:"modifier/:id",component:ModifierComponent},
  {path:"accueil",component:AccueilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
