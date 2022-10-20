import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Consulta } from '../model/consulta';
import { ConsultaService } from '../services/consulta.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultaResolver implements Resolve<Consulta> {

  constructor(private serviceConsulta: ConsultaService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Consulta> {
    if(route.params && route.params['id']) {
      return this.serviceConsulta.findById(route.params['id']);
    }

    return of({id: '', idMedico: '', idPaciente: '', data: '', hora: '', valor: '', formaPagamento: ''});
  }
}
