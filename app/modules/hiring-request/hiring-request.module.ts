import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HiringRequestRoutingModule } from './hiring-request-routing.module';
import { RequestListComponent } from './request-list/request-list.component';


@NgModule({
  declarations: [
    RequestListComponent
  ],
  imports: [
    CommonModule,
    HiringRequestRoutingModule
  ]
})
export class HiringRequestModule { }
