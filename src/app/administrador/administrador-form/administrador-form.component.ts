import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdministradorService } from '../services/administrador.service';

@Component({
  selector: 'app-administrador-form',
  templateUrl: './administrador-form.component.html',
  styleUrls: ['./administrador-form.component.css']
})
export class AdministradorFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private administradorFormService: AdministradorService,
    private _snackBar: MatSnackBar,
    private location: Location
  ) { 
    this.form = this.formBuilder.group({
      usuario: [null],
      senha: [null]
    });
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
