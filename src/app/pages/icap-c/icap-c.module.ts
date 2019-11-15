import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ICAPCFormComponent } from '../../components/icap-c-form/icap-c-form.component'

import { IonicModule } from '@ionic/angular';

import { ICAPCPage } from './icap-c.page';

const routes: Routes = [
  {
    path: '',
    component: ICAPCPage
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
  declarations: [ICAPCPage, ICAPCFormComponent]
})
export class ICAPCPageModule {}
