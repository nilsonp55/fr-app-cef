import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'administracion', loadChildren: () => import('./modules/administracion/administracion.module').then(m => m.AdministracionModule) },
  { path: 'cargue', loadChildren: () => import('./modules/cargue-de-certificacion/cargue-de-certificacion.module').then(m => m.CargueDeCertificacionModule) },
  { path: 'liquidacion', loadChildren: () => import('./modules/liquidacion/liquidacion.module').then(m => m.LiquidacionModule) },
  { path: 'conciliacion', loadChildren: () => import('./modules/conciliacion/conciliacion.module').then(m => m.ConciliacionModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
