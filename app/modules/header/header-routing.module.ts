import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadToolbarComponent } from './head-toolbar/head-toolbar.component';

const routes: Routes = [
  { path: '', component: HeadToolbarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
