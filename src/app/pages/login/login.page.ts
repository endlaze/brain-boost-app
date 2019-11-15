import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecoverPasswordComponent } from 'src/app/components/recover-password/recover-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() { }

  openAppModal = () => {
    const modal = this.modalController.create({
      component: RecoverPasswordComponent,
      cssClass: 'apps-modal'
    }).then(modal => {
      modal.present();
      modal.onDidDismiss()
        .then(() => {
          //Code
        });
    });
  }
}