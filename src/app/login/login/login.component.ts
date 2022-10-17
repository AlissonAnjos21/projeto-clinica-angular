import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';

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
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
