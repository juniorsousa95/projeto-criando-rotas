import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina3Component } from './pagina3/pagina3.component';
import { Pagina4Component } from './pagina4/pagina4.component';
import { PaginaNotFoundComponent } from './pagina-not-found/pagina-not-found.component';
import { AuthenticationService } from './authentication.service';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:"pagina1", component:Pagina1Component, canActivate:[AuthenticationService]},  
  {path:"pagina2", component:Pagina2Component, canActivate:[AuthenticationService]},
  {path:"pagina3", component:Pagina3Component, canActivate:[AuthenticationService]},
  {path:"login", component:LoginComponent},
  {path:"pagina4", component:Pagina4Component, canActivate:[AuthenticationService]},
  {path:"", redirectTo:"/pagina1", pathMatch: 'full'}, 
  {path:"**", component:PaginaNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
