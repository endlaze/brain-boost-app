import { Component, OnInit, ɵConsole } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ReminderService } from '../../services/reminder-service/reminder.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-reminder',
  templateUrl: './edit-reminder.component.html',
  styleUrls: ['./edit-reminder.component.scss'],
})
export class EditReminderComponent implements OnInit {
  private reminderForm: FormGroup;
  reminderTitle
  reminderDesc
  reminderCount
  date
  time
  reminders = [];
  datePickerOptions: any;
  timePickerOptions: any;
  selectedDate;
  id_user = '';
  newReminder;
  idReminder;

  constructor(public modalController: ModalController, private storage: Storage, private reminderService: ReminderService, private formBuilder: FormBuilder, private router: Router, private navParams: NavParams ) {
    this.reminderForm = this.formBuilder.group({
      id: [''],
      active: [''],
      idUser: [''],
      title: [''],
      description: [''],
      reminderTime: ['']
    });
  }

  ngOnInit() {
    this.storage.get('reminder-count').then(count => {
      this.reminderCount = count;
    });
    this.updateReminders();
  }
  
  saveReminder = () => { 
    // this.reminderCount;   
    console.log(this.reminderCount) 
    // console.log(this.reminderCount-1) 
    
      
        this.storage.get('reminders').then(async rem => {          
          let newRems = []      
          rem.forEach(reminder => {
            if (reminder.rem_id !== this.reminderCount) {
              newRems.push(reminder)
              console.log(newRems)
            }
          });
          this.storage.set('reminders', newRems).then(() => {
            this.reminderCount = this.reminderCount-1;
            this.updateReminders();
          })
        });
        let reminder = {
        rem_id: this.reminderCount,
        rem_title: this.reminderTitle,
        rem_desc: this.reminderDesc,
        rem_date: this.date,
        rem_time: this.time
      }

        this.storage.set('reminder-count', this.reminderCount++);
        this.storage.get('reminders').then((reminders: any) => {
          reminders.push(reminder);        
          this.storage.set('reminders', reminders);
         this.closeModal();
         this.updateReminders();
        });
       }


  getReminder = (id: any) => {
    var idRem = id + "";
    return new Promise((resolve, reject) => {
      this.reminderService.getReminder(idRem).subscribe((data: {}) => {
      resolve(this.newReminder = data)
      console.log(this.newReminder)
      
    }, err => { console.log(err) });
    })    
  }
    
  updateReminders = () => {
    this.storage.get('reminders').then(rem => {
      this.reminders = rem;
    });
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  addReminderToStorage = async () => {
      await this.delay(1500);
      //console.log(this.newReminder)       
      //let reminderDate = new Date(this.date);
      //var dateR = new Date(reminderDate.getFullYear(), reminderDate.getMonth()+1,reminderDate.getDate(), reminderDate.getHours() , reminderDate.getMinutes());
      //dateR = {{date | date:'yyyy-MM-ddTHH:mm:ssZ'}}
      let reminder = {
        rem_id: this.newReminder.id,
        rem_title: this.newReminder.title,
        rem_desc: this.newReminder.description,
        rem_date: this.date,
        rem_time: this.time
      }      
        var reminderId = parseInt(reminder.rem_id);
        this.storage.get('reminders').then(async rem => {
          let newRems = []          
          rem.forEach(reminder => {
            if (reminder.rem_id !== reminderId) {
              newRems.push(reminder)
            }
          });
          this.storage.set('reminders', newRems).then(() => {            
            this.updateReminders();
          })
        });
      
      this.storage.set('reminder-count', this.newReminder.id);
      this.storage.get('reminders').then((reminders: any) => {
        reminders.push(reminder);        
        this.storage.set('reminders', reminders);        
        this.closeModal();
        this.updateReminders();
      });      
  }

  
  closeModal = () => {
    this.modalController.dismiss()
    this.updateReminders();
  }
}