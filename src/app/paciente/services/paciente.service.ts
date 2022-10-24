import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../model/paciente';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private readonly API = 'api/pacientes';

  constructor(private httpClient: HttpClient) { }

  listAll() {
    return this.httpClient.get<Paciente[]>(this.API).pipe(first());
  }

  findById(id: string) {
    return this.httpClient.get<Paciente>(`${this.API}/${id}`);
  }

  findByNome(nome: string) {
    return this.httpClient.get<Paciente[]>(`${this.API}/find?nome=${nome}`);
  }

  findByCpf(nome: string) {
    return this.httpClient.get<Paciente[]>(`${this.API}/find?cpf=${nome}`);
  }

  save(paciente: Partial<Paciente>) {
    if(paciente.id) {
      return this.update(paciente);
    }
    return this.create(paciente);
  }

  private create(paciente: Partial<Paciente>) {
    return this.httpClient.post<Paciente>(this.API, paciente);
  }

  private update(paciente: Partial<Paciente>) {
    return this.httpClient.put<Paciente>(this.API, paciente);
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

}
