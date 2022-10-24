import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Paciente } from '../../model/paciente';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {

  readonly displayedColumns = ['id', 'nome', 'actions'];
  @Input() pacientes: Paciente[] = [];
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

  onEdit(paciente: Paciente) {
    this.edit.emit(paciente);
  }

  onDelete(paciente: Paciente) {
    this.delete.emit(paciente);
  }

  onView(paciente: Paciente) {
    this.view.emit(paciente);
  }

}
