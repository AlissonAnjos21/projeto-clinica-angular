import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdministradorService } from '../services/administrador.service';

@Component({
  selector: 'app-administrador-form',
  templateUrl: './administrador-form.component.html',
  styleUrls: ['./administrador-form.component.css']
})
export class AdministradorFormComponent implements OnInit {

  form = this.formBuilder.group({
    usuario: [''],
    senha: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private administradorFormService: AdministradorService,
    private _snackBar: MatSnackBar,
    private location: Location
  ) { 
    // this.form
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log("It's Working");
    // console.log(this.form.value)
    this.administradorFormService.save(this.form.value)
    .subscribe(result => this.onSuccess(), error => this.onError());

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
