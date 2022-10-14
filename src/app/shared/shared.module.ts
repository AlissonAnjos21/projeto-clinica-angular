import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    DeleteDialogComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [
    ErrorDialogComponent,
    DeleteDialogComponent
  ]
})
export class SharedModule { }
