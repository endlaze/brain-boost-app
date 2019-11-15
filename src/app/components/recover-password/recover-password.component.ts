import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss'],
})
export class RecoverPasswordComponent implements OnInit {
  id

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  sendEmail = () => {
    //Code here
    this.closeModal();
  }

  closeModal = () => {
    this.modalController.dismiss()
  }

}
