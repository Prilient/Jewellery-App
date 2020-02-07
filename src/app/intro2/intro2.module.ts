import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Intro2Component } from './intro2.component';
const routes: Routes = [
  {
    path: '',
    component: Intro2Component
  }
];

@NgModule({
  declarations:[Intro2Module],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class Intro2Module {}






