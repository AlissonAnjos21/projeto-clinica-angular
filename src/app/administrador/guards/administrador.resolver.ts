import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AdministradorService } from '../services/administrador.service';
import { Administrador } from '../model/administrador';

@Injectable({
  providedIn: 'root'
})
export class AdministradorResolver implements Resolve<Partial<Administrador>> {

  constructor(private service: AdministradorService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Partial<Administrador>> {
    if(route.params && route.params['id']) {
      return this.service.findById(route.params['id']);
    }

    return of({usuario: '', senha: ''});
  }
}
