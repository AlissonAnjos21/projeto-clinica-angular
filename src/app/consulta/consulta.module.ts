import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaRoutingModule } from './consulta-routing.module';
import { ConsultaListComponent } from './components/consulta-list/consulta-list.component';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { ConsultaFormComponent } from './containers/consulta-form/consulta-form.component';
import { ConsultaSearchComponent } from './containers/consulta-search/consulta-search.component';


@NgModule({
  declarations: [
    ConsultaListComponent,
    ConsultaComponent,
    ConsultaFormComponent,
    ConsultaSearchComponent
  ],
  imports: [
    CommonModule,
    ConsultaRoutingModule
  ]
})
export class ConsultaModule { }
