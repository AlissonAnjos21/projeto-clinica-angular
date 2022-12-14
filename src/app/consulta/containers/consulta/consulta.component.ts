import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { ConsultaService } from '../../services/consulta.service';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../../login/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Consulta } from '../../model/consulta';
import { ConsultaDeleteDialogComponent } from '../../components/consulta-delete-dialog/consulta-delete-dialog.component';
import { ConsultaViewComponent } from '../../components/consulta-view/consulta-view.component';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  consultas$: Observable<Consulta[]>;

  constructor(
    private consultaService: ConsultaService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private login: LoginService,
    private _snackBar: MatSnackBar
  ) {
    this.consultas$ = this.consultaService.listAll().pipe(
      catchError(error => {
        this.onError('Falha na Exibição! Verifique a sua conexão com a base de dados.');
        return of([]);
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
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onView(consulta: Consulta) {
    this.dialog.open(ConsultaViewComponent, {data: consulta})
  }

  onEdit(consulta: Consulta) {
    this.router.navigate(['edit', consulta.id], {relativeTo: this.route});
  }

  onDelete(consulta: Consulta) {
    this.dialog.open(ConsultaDeleteDialogComponent, {data: consulta.id});
  }

  onSearch() {
    this.router.navigate(['find'], {relativeTo: this.route});
  }

  onBack() {
    this.router.navigate(['']);
    this.login.logged = false;
    this._snackBar.open('Logout realizado com sucesso!', '', {duration: 5000});
  }

}
