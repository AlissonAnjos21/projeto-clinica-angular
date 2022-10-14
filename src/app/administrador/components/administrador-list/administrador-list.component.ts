import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Administrador } from '../../model/administrador';

@Component({
  selector: 'app-administrador-list',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})
export class AdministradorListComponent implements OnInit {

  readonly displayedColumns = ['id', 'usuario', 'actions'];
  @Input() administradores: Administrador[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(administrador: Administrador) {
    this.edit.emit(administrador);
  }

  onDelete(administrador: Administrador) {
    this.delete.emit(administrador);
  }

}
