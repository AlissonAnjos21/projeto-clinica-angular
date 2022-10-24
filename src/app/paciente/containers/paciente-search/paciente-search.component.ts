import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../../../login/services/login.service';
import { Location } from '@angular/common';
import { Paciente } from '../../model/paciente';
import { Observable, toArray, catchError, of } from 'rxjs';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { PacienteDeleteDialogComponent } from '../../components/paciente-delete-dialog/paciente-delete-dialog.component';
import { PacienteViewComponent } from '../../components/paciente-view/paciente-view.component';

@Component({
  selector: 'app-paciente-search',
  templateUrl: './paciente-search.component.html',
  styleUrls: ['./paciente-search.component.css']
})
export class PacienteSearchComponent implements OnInit {

  formSearchType = this.formBuilder.group({
    type: [''],
    value: ['']
  });

  pacientes$: Observable<Paciente[]>;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private servicePaciente: PacienteService,
    public dialog: MatDialog,
    private router: Router,
    private location: Location,
    private login: LoginService
  ) {
    this.pacientes$ = new Observable<Paciente[]>();
  }

  ngOnInit(): void {
    this.login.loginTest();
  }

  onSubmit() {
    if(this.formSearchType.value.type == 'id' && this.formSearchType.value.value){
      this.pacientes$ = this.servicePaciente.findById(this.formSearchType.value.value!).pipe(
        toArray(),
        catchError(error => {
          this.onError('Falha na Exibição! Verifique a base de dados.');
          return of();
        })
      );

    }else if(this.formSearchType.value.type == 'nome' && this.formSearchType.value.value){
      this.pacientes$ = this.servicePaciente.findByNome(this.formSearchType.value.value!).pipe(
        catchError(error => {
          this.onError('Falha na Exibição! Verifique a base de dados.');
          return of([]);
        }));

    }else if(this.formSearchType.value.type == 'cpf' && this.formSearchType.value.value){
      this.pacientes$ = this.servicePaciente.findByCpf(this.formSearchType.value.value!).pipe(
        catchError(error => {
          this.onError('Falha na Exibição! Verifique a base de dados.');
          return of([]);
        }));

    }else {
      this.onError('Falha na Exibição! Insira os dados necessários.');
    }

  }

  onAdd() {
    this.router.navigate(['pacientes/new']);
  }

  onView(paciente: Paciente) {
    this.dialog.open(PacienteViewComponent, {data: paciente})
  }

  onEdit(paciente: Paciente) {
    this.router.navigate(['pacientes/edit', paciente.id]);
  }

  onDelete(paciente: Paciente) {
    this.dialog.open(PacienteDeleteDialogComponent, {data: paciente.id});
  }

  private onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {data: errorMsg});
  }

  onBack() {
    this.location.back();
  }

}
