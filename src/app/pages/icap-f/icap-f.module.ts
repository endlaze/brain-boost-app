import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IcapFFormComponent } from '../../components/icap-f-form/icap-f-form.component';

import { IonicModule } from '@ionic/angular';

import { IcapFPage } from './icap-f.page';

const routes: Routes = [
  {
    path: '',
    component: IcapFPage
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
  declarations: [IcapFPage, IcapFFormComponent]
})
export class IcapFPageModule {}
