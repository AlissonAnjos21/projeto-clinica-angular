import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PacienteService } from '../../services/paciente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente-delete-dialog',
  templateUrl: './paciente-delete-dialog.component.html',
  styleUrls: ['./paciente-delete-dialog.component.css']
})
export class PacienteDeleteDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private servicePaciente: PacienteService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onAgree() {
    this.servicePaciente.delete(this.data).subscribe({next: result => {this.onSuccess();}, error: error => {this.onError();}});

  }

  private onSuccess() {
    this.reloadComponent(true);
    this._snackBar.open('Remoção realizada com sucesso!', '', {duration: 5000});
  }

  private onError() {
    this._snackBar.open('Falha ao remover item! Tente novamente.', '', {duration: 5000});
  }

  private reloadComponent(self: boolean, urlToNavigateTo?: string){
    const url = self ? this.router.url : urlToNavigateTo;
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      this.router.navigate([`/${url}`]);
    });
  }

}
