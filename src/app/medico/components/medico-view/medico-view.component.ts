import { Component, Inject, OnInit } from '@angular/core';
import { Medico } from '../../model/medico';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-medico-view',
  templateUrl: './medico-view.component.html',
  styleUrls: ['./medico-view.component.css']
})
export class MedicoViewComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Medico
  ) { }

  ngOnInit(): void {
  }

}
