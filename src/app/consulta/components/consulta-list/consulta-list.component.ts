import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Consulta } from '../../model/consulta';

@Component({
  selector: 'app-consulta-list',
  templateUrl: './consulta-list.component.html',
  styleUrls: ['./consulta-list.component.css']
})
export class ConsultaListComponent implements OnInit {

  readonly displayedColumns = ['id', 'idMedico', 'idPaciente', 'data', 'hora', 'valor', 'formaPagamento', 'actions'];
  @Input() consultas: Consulta[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(consulta: Consulta) {
    this.edit.emit(consulta);
  }

  onDelete(consulta: Consulta) {
    this.delete.emit(consulta);
  }

}
