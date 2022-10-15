import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { AdministradorService } from '../../services/administrador.service';
import { catchError, from, map, merge, Observable, of, tap, toArray } from 'rxjs';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Administrador } from '../../model/administrador';
import { MatDialog } from '@angular/material/dialog';

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
    public dialog: MatDialog
    ) {
      this.administradores$ = new Observable<Administrador[]>();
    }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log('Working');
    // console.log(this.formSearchType.value.type);
    // console.log(this.formSearchType.value.value);
    if(this.formSearchType.value.type == 'id'){
      this.administradores$ = this.serviceAdministrador.findById(this.formSearchType.value.value!).pipe(
        toArray(),
        catchError(error => {
          this.onError('Falha na Exibição! Verifique a sua conexão com a base de dados.');
          return of();
        })
      );
      // console.log('Working');
    }else{
      this.administradores$ = this.serviceAdministrador.findByUser(this.formSearchType.value.value!).pipe(
        catchError(error => {
          this.onError('Falha na Exibição! Verifique a sua conexão com a base de dados.');
          return of([]);
        })
      );
      // console.log('Working');
    }

  }

  onEdit(administrador: Administrador) {

  }

  onDelete(administrador: Administrador) {

  }

  onAdd() {

  }

  private onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {data: errorMsg});
  }

}
