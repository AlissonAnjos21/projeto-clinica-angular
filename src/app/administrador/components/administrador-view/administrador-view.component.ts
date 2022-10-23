import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Administrador } from '../../model/administrador';

@Component({
  selector: 'app-administrador-view',
  templateUrl: './administrador-view.component.html',
  styleUrls: ['./administrador-view.component.css']
})
export class AdministradorViewComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Administrador,
  ) { }

  ngOnInit(): void {
  }

}
