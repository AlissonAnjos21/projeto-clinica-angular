import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicoRoutingModule } from './medico-routing.module';
import { MedicoListComponent } from './components/medico-list/medico-list.component';
import { MedicoComponent } from './containers/medico/medico.component';
import { MedicoFormComponent } from './containers/medico-form/medico-form.component';
import { MedicoSearchComponent } from './containers/medico-search/medico-search.component';
import { MedicoDeleteDialogComponent } from './components/medico-delete-dialog/medico-delete-dialog.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MedicoListComponent,
    MedicoComponent,
    MedicoFormComponent,
    MedicoSearchComponent,
    MedicoDeleteDialogComponent
  ],
  imports: [
    CommonModule,
    MedicoRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MedicoModule { }
