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

  listAll() {
    return this.httpClient.get<Administrador[]>(this.API).pipe(first());
  }

  // O Partial permite que eu consiga receber um objeto que tenha pelo menos um atributo dos presentes na interface. Entretanto, para que as informações sejam tratadas de forma adequada, é necessário que o back-end promova as devidas medidas.
  save(administrador: Partial<Administrador>) {
    return this.httpClient.post<Administrador>(this.API, administrador);
  }

  findById(id: number) {
    return this.httpClient.get<Administrador>(`${this.API}/${id}`);
  }

}
