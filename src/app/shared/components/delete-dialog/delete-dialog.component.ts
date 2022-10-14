import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdministradorService } from '../../../administrador/services/administrador.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private service: AdministradorService,
    private _snackBar: MatSnackBar
    ) {
      // console.log(data);
    }

  ngOnInit(): void {
  }

  onAgree() {
    this.service.delete(this.data).subscribe({next: result => {this.onSuccess();}, error: error => {this.onError();}});

  }

  private onSuccess() {
    window.location.reload();
    this._snackBar.open('Remoção realizada com sucesso!', '', {duration: 5000});
  }

  private onError() {
    this._snackBar.open('Falha ao remover item! Tente novamente.', '', {duration: 5000});
  }

}
