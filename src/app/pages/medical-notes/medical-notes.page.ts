import { Component, OnInit } from '@angular/core';
import { AddMedicalNoteComponent } from '../../components/add-medical-note/add-medical-note.component'
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-medical-notes',
  templateUrl: './medical-notes.page.html',
  styleUrls: ['./medical-notes.page.scss'],
})
export class MedicalNotesPage implements OnInit {
  medicalNotes = []

  constructor(public modalController: ModalController, private storage: Storage) {
    this.updateMedicalNotes();

  }

  ngOnInit() {
  }

  updateMedicalNotes = () => {
    this.storage.get('medicalNotes').then(medNote => {
      this.medicalNotes = medNote;
    });
  }

}
