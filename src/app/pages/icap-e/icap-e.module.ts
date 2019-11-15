import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IcapEFormComponent } from '../../components/icap-e-form/icap-e-form.component';

import { IonicModule } from '@ionic/angular';

import { IcapEPage } from './icap-e.page';

const routes: Routes = [
  {
    path: '',
    component: IcapEPage
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
  declarations: [IcapEPage, IcapEFormComponent]
})
export class IcapEPageModule {}
