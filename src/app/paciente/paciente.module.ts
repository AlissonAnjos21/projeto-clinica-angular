import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteListComponent } from './components/paciente-list/paciente-list.component';
import { PacienteComponent } from './containers/paciente/paciente.component';
import { PacienteFormComponent } from './containers/paciente-form/paciente-form.component';
import { PacienteSearchComponent } from './containers/paciente-search/paciente-search.component';
import { PacienteDeleteDialogComponent } from './components/paciente-delete-dialog/paciente-delete-dialog.component';


@NgModule({
  declarations: [
    PacienteListComponent,
    PacienteComponent,
    PacienteFormComponent,
    PacienteSearchComponent,
    PacienteDeleteDialogComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule
  ]
})
export class PacienteModule { }
