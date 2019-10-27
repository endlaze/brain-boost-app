import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'
import { UserService } from '../../services/user-service/user.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  lastReminder = {
    rem_id: '',
      rem_title: '',
      rem_desc: '',
      rem_date: '',
      rem_time: ''
  }
  constructor(private storage: Storage, private userService: UserService) {
    this.storage.get('reminders').then(reminder => {
      this.lastReminder = reminder.pop();
    })
  }

  ngOnInit = () => {
    this.storage.get('current-user-id').then(userId => {
      this.getUserRoles(userId)
      this.getUserInfo(userId)
    })
  }

  getUserRoles = (id) => {
    this.userService.getRoles({ user_id: id }).subscribe((res: any) => {
      this.storage.set('user_roles', res.response);
    }, err => { console.log(err) });
  }

  getUserInfo = (id) => {
    this.userService.getInfo({ user_id: id }).subscribe((res: any) => {
      this.storage.set('user_info', res.response);
    }, err => { console.log(err) });
  }
}
