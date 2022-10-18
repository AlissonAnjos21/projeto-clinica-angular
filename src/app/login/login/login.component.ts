import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = this.formBuilder.group({
    id: [''],
    usuario: [''],
    senha: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private loginService: LoginService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loginService.loginTest();
  }

  onSubmit() {
    // console.log(this.form.value.usuario, this.form.value.senha);
    // console.log(this.form.value);
    this.loginService.loginConfirm(this.form.value);
    // console.log(this.loginService.logged);
    if(this.loginService.logged == true) {
      this.router.navigate(['administradores']);
      this._snackBar.open('Login realizado com sucesso!', '', {duration: 5000});
    }else {
      this._snackBar.open('Erro! Verifique os dados inseridos.', '', {duration: 5000});
    }

  }

}
