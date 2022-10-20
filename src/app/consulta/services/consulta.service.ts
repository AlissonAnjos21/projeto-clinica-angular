import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consulta } from '../model/consulta';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private readonly API = 'api/consultas';

  constructor(private httpClient: HttpClient) { }

  listAll() {
    return this.httpClient.get<Consulta[]>(this.API).pipe(first());
  }

  findById(id: string) {
    return this.httpClient.get<Consulta>(`${this.API}/${id}`);
  }

  findByData(data: string) {
    return this.httpClient.get<Consulta[]>(`${this.API}/find?data=${data}`);
  }

  findByIdPaciente(idPaciente: string) {
    return this.httpClient.get<Consulta[]>(`${this.API}/find?idPaciente=${idPaciente}`);
  }

  findByIdMedico(idMedico: string) {
    return this.httpClient.get<Consulta[]>(`${this.API}/find?idMedico=${idMedico}`);
  }

  save(consulta: Partial<Consulta>) {
    if(consulta.id) {
      return this.update(consulta);
    }
    return this.create(consulta);
  }

  private create(consulta: Partial<Consulta>) {
    return this.httpClient.post<Consulta>(this.API, consulta);
  }

  private update(consulta: Partial<Consulta>) {
    return this.httpClient.put<Consulta>(this.API, consulta);
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

}
