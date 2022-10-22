import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Medico } from '../model/medico';
import { MedicoService } from '../services/medico.service';

@Injectable({
  providedIn: 'root'
})
export class MedicoResolver implements Resolve<Medico> {

  constructor(private serviceMedico: MedicoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Medico> {
    if(route.params && route.params['id']) {
      return this.serviceMedico.findById(route.params['id']);
    }

    return of({id: '', nome: '', cpf: '', cnpj: '', crm: '', dataNascimento: '', endereco: '', email: '', telefone: '', tipoContrato: '', especialidade: ''});
  }
}
