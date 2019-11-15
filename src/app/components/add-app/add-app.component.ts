import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-add-app',
  templateUrl: './add-app.component.html',
  styleUrls: ['./add-app.component.scss'],
})
export class AddAppComponent implements OnInit {
  appTitle
  appPrice
  appDesc

  constructor(public modalController: ModalController, private storage: Storage) { }

  ngOnInit() {}

  saveApp = () => {
    let app = {
      app_appTitle: this.appTitle,
      app_appPrice: this.appPrice,
      app_appDesc: this.appDesc
    }
    this.storage.get('apps').then((apps: any) => {
      console.log(apps)
      apps.push(app);
      this.storage.set('apps', apps);
      this.closeModal();
    });
  }

  closeModal = () => {
    this.modalController.dismiss()
  }

}
