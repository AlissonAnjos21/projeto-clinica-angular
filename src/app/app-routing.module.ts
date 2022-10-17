import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'administradores' },
  { path: 'administradores',
    loadChildren: () => import('./administrador/administrador.module').then(m => m.AdministradorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
