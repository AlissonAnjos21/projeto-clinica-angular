import { Component, OnInit } from '@angular/core';
import { Consulta } from '../../model/consulta';
import { NonNullableFormBuilder } from '@angular/forms';
import { ConsultaService } from '../../services/consulta.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from '../../../login/services/login.service';
import { Location } from '@angular/common';
import { Observable, of, toArray, catchError } from 'rxjs';
import { ConsultaDeleteDialogComponent } from '../../components/consulta-delete-dialog/consulta-delete-dialog.component';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { ConsultaViewComponent } from '../../components/consulta-view/consulta-view.component';

@Component({
  selector: 'app-consulta-search',
  templateUrl: './consulta-search.component.html',
  styleUrls: ['./consulta-search.component.css']
})
export class ConsultaSearchComponent implements OnInit {

  formSearchType = this.formBuilder.group({
    type: [''],
    value: ['']
  });

  consultas$: Observable<Consulta[]>;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private serviceConsulta: ConsultaService,
    public dialog: MatDialog,
    private router: Router,
    private location: Location,
    private login: LoginService
    ) {
      this.consultas$ = new Observable<Consulta[]>();
    }

  ngOnInit(): void {
    this.login.loginTest();
  }

  onSubmit() {
    if(this.formSearchType.value.type == 'id' && this.formSearchType.value.value){
      this.consultas$ = this.serviceConsulta.findById(this.formSearchType.value.value!).pipe(
        toArray(),
        catchError(error => {
          this.onError('Falha na Exibição! Verifique a base de dados.');
          return of();
        })
      );

    }else if(this.formSearchType.value.type == 'data' && this.formSearchType.value.value){
      this.consultas$ = this.serviceConsulta.findByData(this.formSearchType.value.value!).pipe(
        catchError(error => {
          this.onError('Falha na Exibição! Verifique a base de dados.');
          return of([]);
        }));

    }else if(this.formSearchType.value.type == 'idPaciente' && this.formSearchType.value.value){
      this.consultas$ = this.serviceConsulta.findByIdPaciente(this.formSearchType.value.value!).pipe(
        catchError(error => {
          this.onError('Falha na Exibição! Verifique a base de dados.');
          return of([]);
        }));

    }else if(this.formSearchType.value.type == 'idMedico' && this.formSearchType.value.value){
      this.consultas$ = this.serviceConsulta.findByIdMedico(this.formSearchType.value.value!).pipe(
        catchError(error => {
          this.onError('Falha na Exibição! Verifique a base de dados.');
          return of([]);
        }));

    }else {
      this.onError('Falha na Exibição! Insira os dados necessários.');
    }

  }

  onAdd() {
    this.router.navigate(['consultas/new']);
  }

  onView(consulta: Consulta) {
    this.dialog.open(ConsultaViewComponent, {data: consulta})
  }

  onEdit(consulta: Consulta) {
    this.router.navigate(['consultas/edit', consulta.id]);
  }

  onDelete(consulta: Consulta) {
    this.dialog.open(ConsultaDeleteDialogComponent, {data: consulta.id});
  }

  private onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {data: errorMsg});
  }

  onBack() {
    this.location.back();
  }

}
