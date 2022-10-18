import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { AdministradorService } from '../../services/administrador.service';
import { catchError, Observable, of, toArray } from 'rxjs';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Administrador } from '../../model/administrador';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteDialogComponent } from '../../../shared/components/delete-dialog/delete-dialog.component';
import { Location } from '@angular/common';
import { LoginService } from '../../../login/services/login.service';

@Component({
  selector: 'app-administrador-search',
  templateUrl: './administrador-search.component.html',
  styleUrls: ['./administrador-search.component.css']
})
export class AdministradorSearchComponent implements OnInit {

  formSearchType = this.formBuilder.group({
    type: [''],
    value: ['']
  });

  administradores$: Observable<Administrador[]>;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private serviceAdministrador: AdministradorService,
    public dialog: MatDialog,
    private router: Router,
    private location: Location,
    private login: LoginService
    ) {
      this.administradores$ = new Observable<Administrador[]>();
    }

  ngOnInit(): void {
    this.login.loginTest();
  }

  onSubmit() {
    // console.log('Working');
    // console.log(this.formSearchType.value.type);
    // console.log(this.formSearchType.value.value);
    if(this.formSearchType.value.type == 'id' && this.formSearchType.value.value){
      this.administradores$ = this.serviceAdministrador.findById(this.formSearchType.value.value!).pipe(
        toArray(),
        catchError(error => {
          this.onError('Falha na Exibição! Verifique a base de dados.');
          return of();
        })
      );
      // console.log('Working');
    }else if(this.formSearchType.value.type == 'usuario' && this.formSearchType.value.value){
      // console.log('Working else-if');
      this.administradores$ = this.serviceAdministrador.findByUser(this.formSearchType.value.value!).pipe(
        catchError(error => {
          // console.log('Working error step');
          this.onError('Falha na Exibição! Verifique a base de dados.');
          return of([]);
        }));
      // console.log('Working');
    }else {
      this.onError('Falha na Exibição! Insira os dados necessários.');
    }

  }

  onAdd() {
    this.router.navigate(['administradores/new']);
  }

  onEdit(administrador: Administrador) {
    this.router.navigate(['administradores/edit', administrador.id]);
  }

  onDelete(administrador: Administrador) {
    this.dialog.open(DeleteDialogComponent, {data: administrador.id});
  }

  private onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {data: errorMsg});
  }

  onBack() {
    this.location.back();
  }

}
