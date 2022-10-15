import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorFormComponent } from './containers/administrador-form/administrador-form.component';
import { AdministradorComponent } from './containers/administrador/administrador.component';
import { AdministradorResolver } from './guards/administrador.resolver';
import { AdministradorSearchComponent } from './containers/administrador-search/administrador-search.component';

const routes: Routes = [
  { path: '', component: AdministradorComponent },
  { path: 'new', component: AdministradorFormComponent, resolve: {administrador: AdministradorResolver }},
  { path: 'edit/:id', component: AdministradorFormComponent, resolve: {administrador: AdministradorResolver }},
  {path: 'find', component: AdministradorSearchComponent, resolve: {administrador: AdministradorResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
