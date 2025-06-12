import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AdministracionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
