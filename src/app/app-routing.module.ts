import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './site/connexion/login/login.component';
import { NewComponentComponent } from './site/connexion/new-compte/new-component.component';
import { FilmsComponent } from './films/films.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth-guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'newcompte',component:NewComponentComponent},
  {path:'films',canActivate:[AuthGuard],component:FilmsComponent},
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
