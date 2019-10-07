import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RemindersConfigPage } from './reminders-config.page';

const routes: Routes = [
  {
    path: '',
    component: RemindersConfigPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RemindersConfigPage]
})
export class RemindersConfigPageModule {}
