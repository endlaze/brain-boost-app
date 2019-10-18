import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RemindersPage } from './reminders.page';
import { SidemenuComponent } from '../../components/sidemenu/sidemenu.component'
import { AddReminderComponent } from '../../components/add-reminder/add-reminder.component'

const routes: Routes = [
  {
    path: '',
    component: RemindersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RemindersPage, AddReminderComponent]
})
export class RemindersPageModule { }
