import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PacienteService } from '../services/paciente.service';
import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteResolver implements Resolve<Paciente> {

  constructor(private servicePaciente: PacienteService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Paciente> {
    if(route.params && route.params['id']) {
      return this.servicePaciente.findById(route.params['id']);
    }

    return of({id: '', nome: '', cpf: '', email: '', dataNascimento: '', telefone: '', telefoneFamiliar: '', ocupacao: '', endereco: '', planoSaude: '', alergias: [''], doencas: ['']});
  }
}
