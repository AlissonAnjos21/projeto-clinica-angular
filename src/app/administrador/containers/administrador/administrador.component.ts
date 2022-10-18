import { Component, OnInit } from '@angular/core';
import { Administrador } from '../../model/administrador';
import { AdministradorService } from '../../services/administrador.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteDialogComponent } from '../../../shared/components/delete-dialog/delete-dialog.component';
import { LoginComponent } from '../../../login/login/login.component';
import { LoginService } from '../../../login/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  administradores$: Observable<Administrador[]>;

  // administradorService: AdministradorService;

  constructor(
    private administradorService: AdministradorService,
    public dialog: MatDialog,
    private router: Router,  // Possibilita a navegação entre rotas
    private route: ActivatedRoute,  // Informa a rota onde se está atualmente
    private login: LoginService,
    private _snackBar: MatSnackBar,
    ) {
    // this.administradores = [];
    // this.administradorService = new AdministradorService();
    this.administradores$ = this.administradorService.listAll().pipe(
      // O pipe que trará o tratamento de erros
      catchError(error => {
        // console.log(error)
        this.onError('Falha na Exibição! Verifique a sua conexão com a base de dados.');
        return of([])  // Criando um Observable que retornará um array vazio
      })
    );
  }

  ngOnInit(): void {
    this.login.loginTest();
  }

  private onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {data: errorMsg});
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route}); // ralativeTo - informa que a rota é relativa a rota em que já se está
  }

  onEdit(administrador: Administrador) {
    this.router.navigate(['edit', administrador.id], {relativeTo: this.route});
  }

  onDelete(administrador: Administrador) {
    // console.log(administrador);
    this.dialog.open(DeleteDialogComponent, {data: administrador.id});
  }

  onSearch() {
    this.router.navigate(['find'], {relativeTo: this.route});
  }

  onBack() {
    this.router.navigate(['']);
    this.login.logged = false;
    this._snackBar.open('Logout realizada com sucesso!', '', {duration: 5000});
  }

}
