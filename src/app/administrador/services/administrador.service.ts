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

  findById(id: string) {
    return this.httpClient.get<Administrador>(`${this.API}/${id}`);
  }

  // O Partial permite que eu consiga receber um objeto que tenha pelo menos um atributo dos presentes na interface. Entretanto, para que as informações sejam tratadas de forma adequada, é necessário que o back-end promova as devidas medidas.
  save(administrador: Partial<Administrador>) {
    if(administrador.id) {
      // console.log(`Update: Id: ${administrador.id}, Usuário: ${administrador.usuario}, Senha: ${administrador.senha}`);
      return this.update(administrador);
    }
    // console.log(`Create: Id: ${administrador.id}, Usuário: ${administrador.usuario}, Senha: ${administrador.senha}`);
    return this.create(administrador);
  }

  private create(administrador: Partial<Administrador>) {
    return this.httpClient.post<Administrador>(this.API, administrador);
  }

  private update(administrador: Partial<Administrador>) {
    return this.httpClient.put<Administrador>(this.API, administrador);
  }

  delete(id: string) {
    console.log("It's Working");
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

}
