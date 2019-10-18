import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'

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
  constructor(private storage: Storage) {
    this.storage.get('reminders').then(reminder => {
      this.lastReminder = reminder.pop();
    })
  }

  ngOnInit = () => {
    
  }

}
