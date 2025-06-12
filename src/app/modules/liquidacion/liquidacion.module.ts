import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiquidacionRoutingModule } from './liquidacion-routing.module';
import { LiquidacionComponent } from './liquidacion.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LiquidacionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LiquidacionRoutingModule
  ]
})
export class LiquidacionModule { }
