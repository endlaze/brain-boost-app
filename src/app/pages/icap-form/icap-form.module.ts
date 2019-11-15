import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ICAPPrincipalFormComponent } from '../../components/icap-principal-form/icap-principal-form.component'

import { IonicModule } from '@ionic/angular';

import { ICAPFormPage } from './icap-form.page';

const routes: Routes = [
  {
    path: '',
    component: ICAPFormPage
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
  declarations: [ICAPFormPage, ICAPPrincipalFormComponent]
})
export class ICAPFormPageModule {}
