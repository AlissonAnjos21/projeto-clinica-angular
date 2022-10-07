import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './administrador/administrador.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    AdministradorComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    AppMaterialModule
  ]
})
export class AdministradorModule { }
