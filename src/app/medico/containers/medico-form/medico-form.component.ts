import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ConsultaService } from '../../../consulta/services/consulta.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../../login/services/login.service';
import { Medico } from '../../model/medico';

@Component({
  selector: 'app-medico-form',
  templateUrl: './medico-form.component.html',
  styleUrls: ['./medico-form.component.css']
})
export class MedicoFormComponent implements OnInit {

  form = this.formBuilder.group({
    id: [''],
    nome: [''],
    cpf: [''],
    cnpj: [''],
    crm: [''],
    dataNascimento: [''],
    endereco: [''],
    email: [''],
    telefone: [''],
    tipoContrato: [''],
    especialidade: ['']
  });

  action: string = '';


  constructor(
    private formBuilder: NonNullableFormBuilder,
    private medicoFormService: ConsultaService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    private login: LoginService
  ) { }

  ngOnInit(): void {
    this.login.loginTest();
    const medico: Medico = this.route.snapshot.data['medico'];

    this.form.setValue({
      id: medico.id,
      nome: medico.nome,
      cpf: medico.cpf,
      cnpj: medico.cnpj,
      crm: medico.crm,
      dataNascimento: medico.dataNascimento,
      endereco: medico.endereco,
      email: medico.email,
      telefone: medico.telefone,
      tipoContrato: medico.tipoContrato,
      especialidade: medico.especialidade
    })

    this.action = 'Cadastrar';

    if(medico.id) {
      this.action = 'Editar';
    }

  }

  onSubmit() {
    this.medicoFormService.save(this.form.value)
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
