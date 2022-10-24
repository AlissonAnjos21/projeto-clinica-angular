import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Consulta } from '../../model/consulta';

@Component({
  selector: 'app-consulta-view',
  templateUrl: './consulta-view.component.html',
  styleUrls: ['./consulta-view.component.css']
})
export class ConsultaViewComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Consulta
  ) { }

  ngOnInit(): void {
  }

}
