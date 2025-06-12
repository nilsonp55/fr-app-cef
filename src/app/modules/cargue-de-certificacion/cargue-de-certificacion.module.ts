import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargueDeCertificacionRoutingModule } from './cargue-de-certificacion-routing.module';
import { CargueDeCertificacionComponent } from './cargue-de-certificacion.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CargueDeCertificacionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CargueDeCertificacionRoutingModule
  ]
})
export class CargueDeCertificacionModule { }
