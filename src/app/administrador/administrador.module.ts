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


@NgModule({
  declarations: [
    AdministradorComponent,
    AdministradorFormComponent,
    AdministradorListComponent,
    AdministradorSearchComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AdministradorModule { }
