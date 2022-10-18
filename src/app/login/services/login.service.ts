import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Administrador } from '../model/administrador';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'api/administradores';
  public logged: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private router: Router
    ) { }

  loginConfirm(administrador: Partial<Administrador>) {

    let administradores$ = this.findByUser(administrador.usuario!);
    // console.log('Working');
    administradores$.subscribe((x) => {
      x.forEach((y) => {
        if((y.usuario == administrador.usuario) && (y.senha == administrador.senha)) {
          // console.log('Verified User');
          this.logged = true;
        }else {
          // console.log('Access Denied');
        }
      })
    })

  }

  findByUser(user: string) {
    return this.httpClient.get<Administrador[]>(`${this.API}/find?usuario=${user}`);
  }

  loginTest() {
    if(this.logged == false) {
      this.router.navigate(['login']);
    }
  }

}
