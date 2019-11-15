import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ICAPAFormComponent } from '../../components/icap-a-form/icap-a-form.component'

import { IonicModule } from '@ionic/angular';

import { ICAPAPage } from './icap-a.page';

const routes: Routes = [
  {
    path: '',
    component: ICAPAPage
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
  declarations: [ICAPAPage, ICAPAFormComponent]
})
export class ICAPAPageModule {}
