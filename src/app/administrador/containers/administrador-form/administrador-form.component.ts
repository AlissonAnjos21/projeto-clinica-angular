import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdministradorService } from '../../services/administrador.service';
import { ActivatedRoute } from '@angular/router';
import { Administrador } from '../../model/administrador';
import { LoginService } from '../../../login/services/login.service';

@Component({
  selector: 'app-administrador-form',
  templateUrl: './administrador-form.component.html',
  styleUrls: ['./administrador-form.component.css']
})
export class AdministradorFormComponent implements OnInit {

  form = this.formBuilder.group({
    id: [''],
    usuario: [''],
    senha: ['']
  });

  action: string = '';

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private administradorFormService: AdministradorService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    private login: LoginService
  ) {
    // this.form
  }

  ngOnInit(): void {
    this.login.loginTest();
    const administrador: Administrador = this.route.snapshot.data['administrador'];
    // console.log(administrador);

    this.form.setValue({
      id: administrador.id,
      usuario: administrador.usuario,
      senha: administrador.senha
    })

    this.action = 'Cadastrar';

    if(administrador.id) {
      // console.log('Working');
      this.action = 'Editar';
    }

  }

  onSubmit() {
    // console.log("It's Working");
    // console.log(this.form.value);
    this.administradorFormService.save(this.form.value)
    .subscribe({next: result => {this.onSuccess();}, error: error => {this.onError();}});

  }

  onCancel() {
    // console.log("It's Working Too");
    this.location.back(); // Volta
  }

  private onSuccess() {
    this._snackBar.open('Ação realizada com sucesso!', '', {duration: 5000});
    this.onCancel(); // Volta
  }

  private onError() {
    this._snackBar.open('Erro! Falha no cadastro.', '', {duration: 5000});
  }

}
