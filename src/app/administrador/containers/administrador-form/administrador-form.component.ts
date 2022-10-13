import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdministradorService } from '../../services/administrador.service';
import { ActivatedRoute } from '@angular/router';
import { Administrador } from '../../model/administrador';

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

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private administradorFormService: AdministradorService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {
    // this.form
  }

  ngOnInit(): void {
    const administrador: Administrador = this.route.snapshot.data['administrador'];
    // console.log(administrador);

    this.form.setValue({
      id: administrador.id,
      usuario: administrador.usuario,
      senha: administrador.senha
    })

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
    this._snackBar.open('Cadastro realizado com sucesso!', '', {duration: 5000});
    this.onCancel(); // Volta
  }

  private onError() {
    this._snackBar.open('Erro! Falha no cadastro.', '', {duration: 5000});
  }

}
