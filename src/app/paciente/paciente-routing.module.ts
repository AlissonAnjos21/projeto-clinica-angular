import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteSearchComponent } from './containers/paciente-search/paciente-search.component';
import { PacienteResolver } from './guards/paciente.resolver';
import { PacienteFormComponent } from './containers/paciente-form/paciente-form.component';
import { PacienteComponent } from './containers/paciente/paciente.component';

const routes: Routes = [
  { path: '', component:PacienteComponent },
  { path: 'new', component: PacienteFormComponent, resolve: {paciente: PacienteResolver }},
  { path: 'edit/:id', component: PacienteFormComponent, resolve: {paciente: PacienteResolver }},
  {path: 'find', component: PacienteSearchComponent, resolve: {paciente: PacienteResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
