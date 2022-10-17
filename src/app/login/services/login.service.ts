import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Administrador } from '../model/administrador';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'api/administradores';

  constructor(private httpClient: HttpClient) { }

  loginConfirm(administrador: Partial<Administrador>) {

    this.findByUser(administrador.usuario!);
    // console.log('Working');

  }

  findByUser(user: string) {
    return this.httpClient.get<Administrador[]>(`${this.API}/find?usuario=${user}`);
  }

}
