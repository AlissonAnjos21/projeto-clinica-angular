import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaRoutingModule } from './consulta-routing.module';
import { ConsultaListComponent } from './components/consulta-list/consulta-list.component';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { ConsultaFormComponent } from './containers/consulta-form/consulta-form.component';
import { ConsultaSearchComponent } from './containers/consulta-search/consulta-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    ConsultaListComponent,
    ConsultaComponent,
    ConsultaFormComponent,
    ConsultaSearchComponent
  ],
  imports: [
    CommonModule,
    ConsultaRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ConsultaModule { }
