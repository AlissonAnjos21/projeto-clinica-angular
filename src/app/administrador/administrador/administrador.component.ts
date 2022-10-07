import { Component, OnInit } from '@angular/core';
import { Administrador } from '../model/administrador';
import { AdministradorService } from '../services/administrador.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  administradores$: Observable<Administrador[]>;
  displayedColumns = ['id', 'usuario'];

  // administradorService: AdministradorService;

  constructor( private administradorService: AdministradorService ) {
    // this.administradores = [];
    // this.administradorService = new AdministradorService();
    this.administradores$ = this.administradorService.list();
  }

  ngOnInit(): void {
  }

}
