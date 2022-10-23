import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './containers/administrador/administrador.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { AdministradorFormComponent } from './containers/administrador-form/administrador-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdministradorListComponent } from './components/administrador-list/administrador-list.component';
import { AdministradorSearchComponent } from './containers/administrador-search/administrador-search.component';
import { FormsModule } from '@angular/forms';
import { AdministradorDeleteDialogComponent } from './components/administrador-delete-dialog/administrador-delete-dialog.component';
import { AdministradorViewComponent } from './components/administrador-view/administrador-view.component';


@NgModule({
  declarations: [
    AdministradorComponent,
    AdministradorFormComponent,
    AdministradorListComponent,
    AdministradorSearchComponent,
    AdministradorDeleteDialogComponent,
    AdministradorViewComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdministradorModule { }
