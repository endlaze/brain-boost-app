import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-add-medical-note',
  templateUrl: './add-medical-note.component.html',
  styleUrls: ['./add-medical-note.component.scss'],
})
export class AddMedicalNoteComponent implements OnInit {
  medicalNoteTitle
  medicalNoteDesc
  medicalNoteCount
  patient

  constructor(public modalController: ModalController, private storage: Storage) { }

  ngOnInit() {
    this.storage.get('medicalNote-count').then(count => {
      this.medicalNoteCount = count;
    });

  }

  saveMedicalNote = () => {
    this.medicalNoteCount++;
    //console.log(this.patient)
    let medicalNote = {
      medNote_id: this.medicalNoteCount,
      medNote_title: this.medicalNoteTitle,
      medNote_desc: this.medicalNoteDesc,
      medNote_patient: this.patient
    }
    console.log(medicalNote)

    this.storage.set('medicalNote-count', this.medicalNoteCount);
    this.storage.get('medicalNotes').then((medicalNotes: any) => {
      medicalNotes.push(medicalNote);
      this.storage.set('medicalNotes', medicalNotes);
      this.closeModal();
    });
  }

  closeModal = () => {
    this.modalController.dismiss()
  }

}
