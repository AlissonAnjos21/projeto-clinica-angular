import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteListComponent } from './components/paciente-list/paciente-list.component';
import { PacienteComponent } from './containers/paciente/paciente.component';
import { PacienteFormComponent } from './containers/paciente-form/paciente-form.component';
import { PacienteSearchComponent } from './containers/paciente-search/paciente-search.component';
import { PacienteDeleteDialogComponent } from './components/paciente-delete-dialog/paciente-delete-dialog.component';
import { PacienteViewComponent } from './components/paciente-view/paciente-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    PacienteListComponent,
    PacienteComponent,
    PacienteFormComponent,
    PacienteSearchComponent,
    PacienteDeleteDialogComponent,
    PacienteViewComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PacienteModule { }
