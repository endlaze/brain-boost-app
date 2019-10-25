import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module'

import { IonicModule } from '@ionic/angular';

import { AddMedicalNotesPage } from './add-medical-notes.page';
import { AddMedicalNoteComponent } from '../../components/add-medical-note/add-medical-note.component'

const routes: Routes = [
  {
    path: '',
    component: AddMedicalNotesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [AddMedicalNotesPage, AddMedicalNoteComponent]
})
export class AddMedicalNotesPageModule {}
