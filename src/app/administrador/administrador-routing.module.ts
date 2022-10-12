import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorFormComponent } from './containers/administrador-form/administrador-form.component';
import { AdministradorComponent } from './containers/administrador/administrador.component';

const routes: Routes = [
  { path: '', component: AdministradorComponent },
  { path: 'new', component: AdministradorFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
