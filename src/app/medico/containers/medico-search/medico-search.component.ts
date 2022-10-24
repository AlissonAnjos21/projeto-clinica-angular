import { Component, OnInit } from '@angular/core';
import { Medico } from '../../model/medico';
import { Observable, of, catchError, toArray } from 'rxjs';
import { MedicoService } from '../../services/medico.service';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from '../../../login/services/login.service';
import { Location } from '@angular/common';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { MedicoDeleteDialogComponent } from '../../components/medico-delete-dialog/medico-delete-dialog.component';
import { MedicoViewComponent } from '../../components/medico-view/medico-view.component';

@Component({
  selector: 'app-medico-search',
  templateUrl: './medico-search.component.html',
  styleUrls: ['./medico-search.component.css']
})
export class MedicoSearchComponent implements OnInit {

  formSearchType = this.formBuilder.group({
    type: [''],
    value: ['']
  });

  medicos$: Observable<Medico[]>;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private serviceMedico: MedicoService,
    public dialog: MatDialog,
    private router: Router,
    private location: Location,
    private login: LoginService
  ) {
    this.medicos$ = new Observable<Medico[]>();
   }

  ngOnInit(): void {
    this.login.loginTest();
  }

  onSubmit() {
    if(this.formSearchType.value.type == 'id' && this.formSearchType.value.value){
      this.medicos$ = this.serviceMedico.findById(this.formSearchType.value.value!).pipe(
        toArray(),
        catchError(error => {
          this.onError('Falha na Exibição! Verifique a base de dados.');
          return of();
        })
      );

    }else if(this.formSearchType.value.type == 'nome' && this.formSearchType.value.value){
      this.medicos$ = this.serviceMedico.findByNome(this.formSearchType.value.value!).pipe(
        catchError(error => {
          this.onError('Falha na Exibição! Verifique a base de dados.');
          return of([]);
        }));

    }else if(this.formSearchType.value.type == 'cpf' && this.formSearchType.value.value){
      this.medicos$ = this.serviceMedico.findByCpf(this.formSearchType.value.value!).pipe(
        catchError(error => {
          this.onError('Falha na Exibição! Verifique a base de dados.');
          return of([]);
        }));

    }else {
      this.onError('Falha na Exibição! Insira os dados necessários.');
    }

  }

  onAdd() {
    this.router.navigate(['medicos/new']);
  }

  onView(medico: Medico) {
    this.dialog.open(MedicoViewComponent, {data: medico})
  }

  onEdit(medico: Medico) {
    this.router.navigate(['medicos/edit', medico.id]);
  }

  onDelete(medico: Medico) {
    this.dialog.open(MedicoDeleteDialogComponent, {data: medico.id});
  }

  private onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {data: errorMsg});
  }

  onBack() {
    this.location.back();
  }

}
