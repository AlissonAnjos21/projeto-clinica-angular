import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login',
   loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  { path: 'administradores',
    loadChildren: () => import('./administrador/administrador.module').then(m => m.AdministradorModule)
  },
  { path: 'consultas',
    loadChildren: () => import('./consulta/consulta.module').then(m => m.ConsultaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
