import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-edit-reminder',
  templateUrl: './edit-reminder.component.html',
  styleUrls: ['./edit-reminder.component.scss'],
})
export class EditReminderComponent implements OnInit {
  reminderTitle
  reminderDesc
  reminderCount
  date
  time

  constructor(public modalController: ModalController, private storage: Storage) { }


  ngOnInit() {
    this.storage.get('reminder-count').then(count => {
      this.reminderCount = count;
    });
  }

  editReminder = () => {
    this.reminderCount++;
    console.log(this.date, this.time)
    let reminder = {
      rem_id: this.reminderCount,
      rem_title: this.reminderTitle,
      rem_desc: this.reminderDesc,
      rem_date: this.date,
      rem_time: this.time
    }
    console.log(reminder)

    this.storage.set('reminder-count', this.reminderCount);
    this.storage.get('reminders').then((reminders: any) => {
      reminders.push(reminder);
      this.storage.set('reminders', reminders);
      this.closeModal();
    });
  }

  closeModal = () => {
    this.modalController.dismiss()
  }

}
