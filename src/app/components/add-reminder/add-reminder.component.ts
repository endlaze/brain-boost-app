import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ReminderService } from '../../services/reminder-service/reminder.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-reminder',
  templateUrl: './add-reminder.component.html',
  styleUrls: ['./add-reminder.component.scss'],
})
export class AddReminderComponent implements OnInit {
  private reminderForm: FormGroup;
  reminderTitle
  reminderDesc
  reminderCount
  date
  time
  reminders = [];
  datePickerOptions: any;
  selectedDate;
  id_user = '';

  constructor(public modalController: ModalController, private storage: Storage, private reminderService: ReminderService, private formBuilder: FormBuilder, private router: Router, private navParams: NavParams ) {
    this.reminderForm = this.formBuilder.group({
      active: [''],
      idUser: [''],
      title: [''],
      description: [''],
      reminderTime: ['']
    });

    this.datePickerOptions = { buttons: [{ text: 'Done' }] }
  }


  ngOnInit() {
    this.storage.get('reminder-count').then(count => {
      this.reminderCount = count;
    });
  }

  get form() { return this.reminderForm.controls; }

  saveReminder = () => {
    this.reminderCount++;
    console.log(this.date, this.time)
    let reminderData = this.reminderForm.getRawValue()

    this.storage.get('current-user-id').then((id) => {
      let reminderDate = new Date(this.date)
      let reminderTime = new Date(this.date)

      reminderData['active'] = true;
      reminderData['idUser'] = id;
      reminderData['title'] = this.reminderTitle;
      reminderData['description'] = this.reminderDesc;
      reminderData['reminderTime'] = [reminderTime.getMinutes(),reminderTime.getHours(),reminderDate.getDate(),reminderDate.getMonth()+1,"*"];

      console.log(reminderData)

      this.reminderService.createReminder(reminderData).subscribe((res: any) => {        
        
       this.router.navigate(['/reminders']);
      })

      let reminder = {
        rem_id: this.reminderCount,
        rem_title: this.reminderTitle,
        rem_desc: this.reminderDesc,
        rem_date: this.date,
        rem_time: this.time
      }

      this.storage.set('reminder-count', this.reminderCount);
      this.storage.get('reminders').then((reminders: any) => {
        reminders.push(reminder);        
        this.storage.set('reminders', reminders);
        this.closeModal();
      });
      })
  }

  closeModal = () => {
    this.modalController.dismiss()
  }
}
