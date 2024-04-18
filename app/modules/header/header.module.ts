import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
// import { HeadToolbarComponent } from './head-toolbar/head-toolbar.component';
import { PrimeModulesModule } from 'src/app/prime-modules.module';


@NgModule({
  declarations: [
    // HeadToolbarComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    PrimeModulesModule
  ]
})
export class HeaderModule { }
