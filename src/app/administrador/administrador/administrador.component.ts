import { Component, OnInit } from '@angular/core';
import { Administrador } from '../model/administrador';
import { AdministradorService } from '../services/administrador.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  administradores$: Observable<Administrador[]>;
  displayedColumns = ['id', 'usuario', 'actions'];

  // administradorService: AdministradorService;

  constructor( 
    private administradorService: AdministradorService,
    public dialog: MatDialog,
    private router: Router,  // Possibilita a navegação entre rotas
    private route: ActivatedRoute  // Informa a rota onde se está atualmente
    ) {
    // this.administradores = [];
    // this.administradorService = new AdministradorService();
    this.administradores$ = this.administradorService.list().pipe(
      // O pipe que trará o tratamento de erros
      catchError(error => {
        // console.log(error)
        this.onError('Falha na Exibição! Verifique a sua conexão com a base de dados.');
        return of([])  // Criando um Observable que retornará um array vazio
      })
    );
  }

  ngOnInit(): void {
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {data: errorMsg});
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route}); // ralativeTo - informa que a rota a relativa a rota em que já se está
  }

}
