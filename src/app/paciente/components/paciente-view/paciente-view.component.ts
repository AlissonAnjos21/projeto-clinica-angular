import { Component, Inject, OnInit } from '@angular/core';
import { Paciente } from '../../model/paciente';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-paciente-view',
  templateUrl: './paciente-view.component.html',
  styleUrls: ['./paciente-view.component.css']
})
export class PacienteViewComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Paciente
  ) { }

  ngOnInit(): void {
  }

}
