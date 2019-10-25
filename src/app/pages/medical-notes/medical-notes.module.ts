import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module'

import { IonicModule } from '@ionic/angular';

import { MedicalNotesPage } from './medical-notes.page';
import { MedicalNoteListComponent } from '../../components/medical-note-list/medical-note-list.component'

const routes: Routes = [
  {
    path: '',
    component: MedicalNotesPage
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
  declarations: [MedicalNotesPage, MedicalNoteListComponent]
})
export class MedicalNotesPageModule {}
