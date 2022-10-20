import { Component, Inject, OnInit } from '@angular/core';
import { ConsultaService } from '../../services/consulta.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-delete-dialog',
  templateUrl: './consulta-delete-dialog.component.html',
  styleUrls: ['./consulta-delete-dialog.component.css']
})
export class ConsultaDeleteDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private serviceConsulta: ConsultaService,
    private _snackBar: MatSnackBar,
    private router: Router
    ) {
      // console.log(data);
    }

  ngOnInit(): void {
  }

  onAgree() {
    this.serviceConsulta.delete(this.data).subscribe({next: result => {this.onSuccess();}, error: error => {this.onError();}});

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
