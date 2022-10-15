import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AdministradorService } from '../services/administrador.service';
import { Administrador } from '../model/administrador';

@Injectable({
  providedIn: 'root'
})
export class AdministradorResolver implements Resolve<Administrador> {

  constructor(private serviceAdministrador: AdministradorService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Administrador> {
    if(route.params && route.params['id']) {
      return this.serviceAdministrador.findById(route.params['id']);
    }

    return of({id: '', usuario: '', senha: ''});
  }
}
