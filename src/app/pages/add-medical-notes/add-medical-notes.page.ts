import { Component, OnInit } from '@angular/core';
import { AddMedicalNoteComponent } from '../../components/add-medical-note/add-medical-note.component'
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-add-medical-notes',
  templateUrl: './add-medical-notes.page.html',
  styleUrls: ['./add-medical-notes.page.scss'],
})
export class AddMedicalNotesPage implements OnInit {
  medicalNotes = []

  constructor(public modalController: ModalController, private storage: Storage) {
    this.updateMedicalNotes();

  }

  ngOnInit() {
  }

  openMedicalNoteModal = () => {
    const modal = this.modalController.create({
      component: AddMedicalNoteComponent,
      cssClass: 'medicalNotes-modal'
    }).then(modal => {
      modal.present();
      modal.onDidDismiss()
        .then(() => {
          this.updateMedicalNotes();
        });
    });


  }

  updateMedicalNotes = () => {
    this.storage.get('medicalNotes').then(medNote => {
      this.medicalNotes = medNote;
    });
  }

  deleteMedicalNote = (medicalNoteId) => {
    medicalNoteId = parseInt(medicalNoteId);
    this.storage.get('medicalNotes').then(async medNote => {
      let newMedNotes = []
      await this.delay(1500);
      medNote.forEach(medicalNote => {
        if (medicalNote.medNote_id !== medicalNoteId) {
          newMedNotes.push(medicalNote)
        }
      });
      this.storage.set('medicalNotes', newMedNotes).then(() => {
        this.updateMedicalNotes();
      })
    });
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
