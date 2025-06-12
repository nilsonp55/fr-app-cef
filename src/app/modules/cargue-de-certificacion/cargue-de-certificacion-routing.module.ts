import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargueDeCertificacionComponent } from './cargue-de-certificacion.component';

const routes: Routes = [{ path: '', component: CargueDeCertificacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargueDeCertificacionRoutingModule { }
