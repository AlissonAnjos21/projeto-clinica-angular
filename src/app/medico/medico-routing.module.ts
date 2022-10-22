import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicoComponent } from './containers/medico/medico.component';
import { MedicoFormComponent } from './containers/medico-form/medico-form.component';
import { MedicoResolver } from './guards/medico.resolver';
import { MedicoSearchComponent } from './containers/medico-search/medico-search.component';

const routes: Routes = [
  { path: '', component: MedicoComponent },
  { path: 'new', component: MedicoFormComponent, resolve: {medico: MedicoResolver} },
  { path: 'edit/:id', component: MedicoFormComponent, resolve: {medico: MedicoResolver} },
  { path: 'find', component: MedicoSearchComponent, resolve: {medico: MedicoResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicoRoutingModule { }
