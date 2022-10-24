import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../services/medico.service';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../../login/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of, catchError, Observable } from 'rxjs';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { MedicoDeleteDialogComponent } from '../../components/medico-delete-dialog/medico-delete-dialog.component';
import { Medico } from '../../model/medico';
import { MedicoViewComponent } from '../../components/medico-view/medico-view.component';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  medicos$: Observable<Medico[]>;

  constructor(
    private medicoService: MedicoService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private login: LoginService,
    private _snackBar: MatSnackBar
  ) {
    this.medicos$ = this.medicoService.listAll().pipe(
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

  onView(medico: Medico) {
    this.dialog.open(MedicoViewComponent, {data: medico})
  }

  onEdit(medico: Medico) {
    this.router.navigate(['edit', medico.id], {relativeTo: this.route});
  }

  onDelete(medico: Medico) {
    this.dialog.open(MedicoDeleteDialogComponent, {data: medico.id});
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
