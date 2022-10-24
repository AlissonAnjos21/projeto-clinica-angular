import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Medico } from '../../model/medico';

@Component({
  selector: 'app-medico-list',
  templateUrl: './medico-list.component.html',
  styleUrls: ['./medico-list.component.css']
})
export class MedicoListComponent implements OnInit {

  readonly displayedColumns = ['id', 'nome', 'actions'];
  @Input() medicos: Medico[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);
  @Output() view = new EventEmitter(false);

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(medico: Medico) {
    this.edit.emit(medico);
  }

  onDelete(medico: Medico) {
    this.delete.emit(medico);
  }

  onView(medico: Medico) {
    this.view.emit(medico);
  }

}
