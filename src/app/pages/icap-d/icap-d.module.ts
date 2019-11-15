import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IcapDFormComponent } from '../../components/icap-d-form/icap-d-form.component';

import { IonicModule } from '@ionic/angular';

import { IcapDPage } from './icap-d.page';

const routes: Routes = [
  {
    path: '',
    component: IcapDPage
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
  declarations: [IcapDPage, IcapDFormComponent]
})
export class IcapDPageModule {}
