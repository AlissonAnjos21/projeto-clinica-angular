import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ConsultaService } from '../../services/consulta.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../../login/services/login.service';
import { Location } from '@angular/common';
import { Consulta } from '../../model/consulta';

@Component({
  selector: 'app-consulta-form',
  templateUrl: './consulta-form.component.html',
  styleUrls: ['./consulta-form.component.css']
})
export class ConsultaFormComponent implements OnInit {

  form = this.formBuilder.group({
    id: [''],
    idMedico: [''],
    idPaciente: [''],
    data: [''],
    hora: [''],
    valor: [''],
    formaPagamento: ['']
  });

  action: string = '';

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private consultaFormService: ConsultaService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    private login: LoginService
  ) { }

  ngOnInit(): void {
    this.login.loginTest();
    const consulta: Consulta = this.route.snapshot.data['consulta'];

    this.form.setValue({
      id: consulta.id,
      idMedico: consulta.idMedico,
      idPaciente: consulta.idPaciente,
      data: consulta.data,
      hora: consulta.hora,
      valor: consulta.valor,
      formaPagamento: consulta.formaPagamento
    })

    this.action = 'Cadastrar';

    if(consulta.id) {
      this.action = 'Editar';
    }

  }

  onSubmit() {
    this.consultaFormService.save(this.form.value)
    .subscribe({next: result => {this.onSuccess();}, error: error => {this.onError();}});

  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this._snackBar.open('Ação realizada com sucesso!', '', {duration: 5000});
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Erro! Falha no cadastro.', '', {duration: 5000});
  }

}
