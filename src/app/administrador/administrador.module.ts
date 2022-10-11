import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './administrador/administrador.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { AdministradorFormComponent } from './administrador-form/administrador-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdministradorListComponent } from './administrador-list/administrador-list.component';


@NgModule({
  declarations: [
    AdministradorComponent,
    AdministradorFormComponent,
    AdministradorListComponent
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
