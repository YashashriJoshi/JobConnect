import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PrimeModulesModule } from 'src/app/prime-modules.module';
import { HiringRequestComponent } from './hiring-request.component';
import { CreateHiringRequestComponent } from './create-hiring-request/create-hiring-request.component';



const routes: Routes = [
  { path: '', component: HiringRequestComponent },
  { path: 'create', component: CreateHiringRequestComponent },
 
]

@NgModule({
  declarations: [
    HiringRequestComponent,
    CreateHiringRequestComponent
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeModulesModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})

export class HiringRequestModule { }
