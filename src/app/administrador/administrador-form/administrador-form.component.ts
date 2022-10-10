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
    private _snackBar: MatSnackBar
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
    .subscribe(result => console.log(result), error => this.onErrorSnackBar());

  }

  onCancel() {
    // console.log("It's Working Too");

  }

  private onErrorSnackBar() {
    this._snackBar.open('Erro! Falha no cadastro.', '', {duration: 5000});
  }

}
