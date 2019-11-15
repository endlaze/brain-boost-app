import { Component, OnInit } from '@angular/core';
import { AddAppComponent } from '../../components/add-app/add-app.component'
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-recommended-apps',
  templateUrl: './recommended-apps.page.html',
  styleUrls: ['./recommended-apps.page.scss'],
})
export class RecommendedAppsPage implements OnInit {
  apps;
  pacient: boolean = false;

  constructor(public modalController: ModalController, private storage: Storage) {
    this.updateApps();
  }

  ngOnInit() {
  }

  openAppModal = () => {
    const modal = this.modalController.create({
      component: AddAppComponent,
      cssClass: 'apps-modal'
    }).then(modal => {
      modal.present();
      modal.onDidDismiss()
        .then(() => {
          this.updateApps();
        });
    });
  }

  updateApps = () => {
    this.storage.get('apps').then(app => {
      this.apps = app;
    });
  }

}
