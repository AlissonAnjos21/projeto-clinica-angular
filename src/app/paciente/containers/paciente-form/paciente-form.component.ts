import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { PacienteService } from '../../services/paciente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../../login/services/login.service';
import { Location } from '@angular/common';
import { Paciente } from '../../model/paciente';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css']
})
export class PacienteFormComponent implements OnInit {

  form = this.formBuilder.group({
    id: [''],
    nome: [''],
    cpf: [''],
    email: [''],
    dataNascimento: [''],
    telefone: [''],
    telefoneFamiliar: [''],
    ocupacao: [''],
    endereco: [''],
    planoSaude: [''],
    alergias: [['']],
    doencas: [['']]
  });

  action: string = '';

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private pacienteFormService: PacienteService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    private login: LoginService
  ) { }

  ngOnInit(): void {
    this.login.loginTest();
    const paciente: Paciente = this.route.snapshot.data['paciente'];

    this.form.setValue({
      id: paciente.id,
      nome: paciente.nome,
      cpf: paciente.cpf,
      email: paciente.email,
      dataNascimento: paciente.dataNascimento,
      telefone: paciente.telefone,
      telefoneFamiliar: paciente.telefoneFamiliar,
      ocupacao: paciente.ocupacao,
      endereco: paciente.endereco,
      planoSaude: paciente.planoSaude,
      alergias: paciente.alergias,
      doencas: paciente.doencas
    })

    this.action = 'Cadastrar';

    if(paciente.id) {
      this.action = 'Editar';
    }

    if(this.action == 'Cadastrar') {
      this.form.value.alergias?.pop();
      this.form.value.doencas?.pop();
    }

  }

  onSubmit() {
    this.pacienteFormService.save(this.form.value)
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

  onAddAllergy(item: string) {
    this.form.value.alergias?.push(item);
  }

  onRemoveAllergy() {
    this.form.value.alergias?.pop();
  }

  onAddSick(item: string) {
    this.form.value.doencas?.push(item);
  }

  onRemoveSick() {
    this.form.value.doencas?.pop();
  }

}
