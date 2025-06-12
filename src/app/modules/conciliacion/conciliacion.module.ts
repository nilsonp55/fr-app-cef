import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConciliacionRoutingModule } from './conciliacion-routing.module';
import { ConciliacionComponent } from './conciliacion.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ConciliacionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ConciliacionRoutingModule
  ]
})
export class ConciliacionModule { }
