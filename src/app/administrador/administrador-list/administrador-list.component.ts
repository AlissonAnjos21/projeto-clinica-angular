import { Component, OnInit } from '@angular/core';
import { Administrador } from '../model/administrador';
import { ActivatedRoute, Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-administrador-list',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})
export class AdministradorListComponent implements OnInit {

  @Input() administradores: Administrador[] = [];
  readonly displayedColumns = ['id', 'usuario', 'actions'];

  constructor(
    private router: Router,  // Possibilita a navegação entre rotas
    private route: ActivatedRoute  // Informa a rota onde se está atualmente
  ) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route}); // ralativeTo - informa que a rota é relativa a rota em que já se está
  }

}
