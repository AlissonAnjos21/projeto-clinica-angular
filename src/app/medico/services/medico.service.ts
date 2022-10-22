import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medico } from '../model/medico';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private readonly API = 'api/medicos';

  constructor(private httpClient: HttpClient) { }

  listAll() {
    return this.httpClient.get<Medico[]>(this.API).pipe(first());
  }

  findById(id: string) {
    return this.httpClient.get<Medico>(`${this.API}/${id}`);
  }

  findByNome(nome: string) {
    return this.httpClient.get<Medico[]>(`${this.API}/find?nome=${nome}`);
  }

  findByCpf(nome: string) {
    return this.httpClient.get<Medico[]>(`${this.API}/find?cpf=${nome}`);
  }

  save(medico: Partial<Medico>) {
    if(medico.id) {
      return this.update(medico);
    }
    return this.create(medico);
  }

  private create(medico: Partial<Medico>) {
    return this.httpClient.post<Medico>(this.API, medico);
  }

  private update(medico: Partial<Medico>) {
    return this.httpClient.put<Medico>(this.API, medico);
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

}
