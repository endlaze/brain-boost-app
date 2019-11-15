import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserService } from '../../services/user-service/user.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { FCMService } from '../../services/fcm-service/fcm.service'
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  currentuserInfo
  notificationsCollection: AngularFirestoreCollection<any>;

  ngOnInit(): void {
    this.storage.get('current-user-id').then(userId => {
      this.getUserInfo(userId)
    })

    this.notificationsCollection = this.afs.collection(`notifications`)

    this.fcm.getToken();

    this.fcm.listenToNotifications().pipe(
      tap(msg => {
        // show a toast

        alert(msg.body)
      })
    )
      .subscribe()

  }



  lastReminder = {
    rem_id: '',
    rem_title: '',
    rem_desc: '',
    rem_date: '',
    rem_time: ''
  }
  constructor(private storage: Storage, private userService: UserService, private afs: AngularFirestore, public fcm: FCMService) {
    this.storage.get('reminders').then(reminder => {
      this.lastReminder = reminder.pop();
    })

  }

  getUserInfo = (id) => {
    this.userService.getInfo({ user_id: id }).subscribe((res: any) => {
      this.currentuserInfo = res.response
      this.storage.set('user_info', res.response);
    }, err => { console.log(err) });
  }

  notifyPeople = () => {
    this.storage.get('user_roles').then(roles => {
      this.getLinkedAccounts(this.currentuserInfo.user_id, roles.user_role.role_id).then((relatedAccounts: any) => {
        relatedAccounts.forEach(relatedAcc => {
          this.postNotification(this.currentuserInfo.user_id, this.currentuserInfo.name, relatedAcc.id)
        });
      })
    });
  }


  getLinkedAccounts = (id, role) => {
    return new Promise((resolve, reject) => {
      let req = { user_id: id, current_user_role: role }
      this.userService.getLinkedAccounts(req).subscribe((res: any) => {
        resolve(res.response)
      }, err => { console.log(err) });
    })
  }

  postNotification = (patientId, patientName, careId) => {
    this.notificationsCollection.add(
      {
        patientId: patientId,
        patientName: patientName,
        careId: careId
      }
    );
  }






  // (id, role) => {
  //   let req = { user_id: id, current_user_role: role }
  //   this.userService.getLinkedAccounts(req).subscribe((res: any) => {
  //     this.linkedAccounts = res.response
  //     this.getRolesForAcc().then(() => {
  //       this.isDataLoaded = true
  //     })
  //   }, err => { console.log(err) });
  // }
}
