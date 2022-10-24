import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../model/paciente';
import { Observable, catchError, of } from 'rxjs';
import { PacienteService } from '../../services/paciente.service';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../../login/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { PacienteViewComponent } from '../../components/paciente-view/paciente-view.component';
import { PacienteDeleteDialogComponent } from '../../components/paciente-delete-dialog/paciente-delete-dialog.component';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  pacientes$: Observable<Paciente[]>;

  constructor(
    private pacienteService: PacienteService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private login: LoginService,
    private _snackBar: MatSnackBar
  ) {
    this.pacientes$ = this.pacienteService.listAll().pipe(
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

  onView(paciente: Paciente) {
    this.dialog.open(PacienteViewComponent, {data: paciente})
  }

  onEdit(paciente: Paciente) {
    this.router.navigate(['edit', paciente.id], {relativeTo: this.route});
  }

  onDelete(paciente: Paciente) {
    this.dialog.open(PacienteDeleteDialogComponent, {data: paciente.id});
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
