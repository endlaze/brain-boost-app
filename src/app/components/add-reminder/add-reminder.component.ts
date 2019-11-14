import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UserService } from '../../services/user-service/user.service';
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
  timePickerOptions: any;
  selectedDate;
  id_user = '';

  foo: string;
  bar: string;

  constructor(public modalController: ModalController, private storage: Storage, private userService: UserService, private formBuilder: FormBuilder, private router: Router, private navParams: NavParams ) {
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
    this.foo = this.navParams.data.foo;
    this.bar = this.navParams.data.bar;

    console.log(this.bar)
    console.log(this.foo)
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

       this.userService.createReminder(reminderData).subscribe((res: any) => {
         console.log(res)
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



























//    getUserReminders = (id) => {
//      this.userService.getReminders({user_id: id}).subscribe((res: any) => {
//        this.storage.set('user_reminders', res.response);
//      }, err => { console.log(err) });
//    }
// }


//   constructor(private formBuilder: FormBuilder, private stockRolesService: StockRolesService, private userService: UserService, private router: Router) {
//     this.reminderForm = this.formBuilder.group({
//       active: ['true', [Validators.pattern('^[0-9]*$'), Validators.required]],
//       idUser: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
//       title: ['', [Validators.required, Validators.minLength(2)]],
//       decription: ['', [Validators.required, Validators.minLength(2)]],
//       time: [{'','','','',''}, [Validators.required]],
//     });
// //mm,hh,dm,mes,ds
//
// }
  //
  // onDateChange(date) {
  //   this.selectedDate = date.detail.value
  // }
  //
  // onTimeChange(time) {
  //   this.selectedTime = time.detail.value
  // }
  //
  // getReminders = () => {
  //   this.remindersURL.getUserReminders.subscribe((res: any) => {
  //     this.formatRS(res.result)
  //   })
  // }



    //
    //
    // onDateChange(date) {
    //   this.selectedDate = date.detail.value
    // }
    //
    //
    // onRoleChange(role) {
    //   this.updateselectedSubroles(role.detail.value)
    // }
    //
    //
    // updateselectedSubroles(role_id) {
    //   role_id = parseInt(role_id)
    //   this.selectedSubroles = []
    //
    //   this.userSubroles.forEach(subrole => {
    //     if (role_id === subrole.role_id) {
    //       this.selectedSubroles.push(subrole)
    //     }
    //   })
    // }
  }



//
//     formatRS = (rs) => {
//       console.log(rs)
//       let seen = []
//       this.userRoles = []
//
//       rs.forEach(element => {
//         let { role_id, role_desc, subrole_id, subrole_desc } = element
//         if (!(seen.includes(role_id))) {
//           seen.push(role_id)
//           this.userRoles.push({ role_id, role_desc })
//         }
//         if (subrole_id) {
//           this.userSubroles.push({ role_id, subrole_id, subrole_desc, checked: false })
//         }
//       });
//     }
//
//     checkId = (id) => {
//       id = id.detail.value
//       if (id.length === 9) {
//         this.getUserInformation(id)
//       }
//     }
//
//     getUserInformation = (id) => {
//       this.userService.getNames({ id: id }).subscribe((res: any) => {
//         let { name, first_last_name, second_last_name } = res
//         this.signUpForm.patchValue({ name: name, first_last_name: first_last_name, second_last_name: second_last_name })
//       })
//     }
//
//   }
//
//
//
//
// id, iduser, active, title, description, lastmodification, remindertime
//
//
//
//
//
