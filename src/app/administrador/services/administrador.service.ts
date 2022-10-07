import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Administrador } from '../model/administrador';
import { first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  private readonly API = 'api/administradores';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Administrador[]>(this.API).pipe(first());
  }

}
