import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Platform } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore'
import {Storage} from '@ionic/storage'



@Injectable({
  providedIn: 'root'
})
export class FCMService {

  constructor(private firebaseNative: FirebaseX, private afs: AngularFirestore, private platform: Platform, private storage:Storage) { }

  async getToken() {
    let token;

    if (this.platform.is('android')) {
      token = await this.firebaseNative.getToken();
    }

    if (this.platform.is('ios')) {
      token = await this.firebaseNative.getToken();
      const perm = await this.firebaseNative.grantPermission();
    }

    if (!this.platform.is('cordova')) {
      // TODO add PWA support with angularfire2
    }

    return this.saveTokenToFirestore(token)


  }

  private saveTokenToFirestore = (token) => {
    if(!token) return;
    const devicesRef = this.afs.collection('devices');

    this.storage.get('current-user-id').then(userId => {
      const docData ={
        token: token,
        userId: userId
      }
      
      return devicesRef.doc(token).set(docData)
    })
    
  }

  listenToNotifications = () => {
    return this.firebaseNative.onMessageReceived()
  }

}
