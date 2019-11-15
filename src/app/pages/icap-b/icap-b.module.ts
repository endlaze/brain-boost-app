import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ICAPBFormComponent } from '../../components/icap-b-form/icap-b-form.component'

import { IonicModule } from '@ionic/angular';

import { ICAPBPage } from './icap-b.page';

const routes: Routes = [
  {
    path: '',
    component: ICAPBPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ICAPBPage, ICAPBFormComponent]
})
export class ICAPBPageModule {}
