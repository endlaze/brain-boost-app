import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ReminderService {
  private remindersURL = environment.apiUrl + '/api/Reminder'

  constructor(private http: HttpClient) { }

  public createReminder = (reminder) => {
    console.log(this.remindersURL)
    return this.http.post(this.remindersURL + '/create', reminder)
  }

  public editReminder = (reminder) => {
    return this.http.post(this.remindersURL + '/edit', reminder)
  }

  public getReminder = (id) => {
    return this.http.get(this.remindersURL + '/' + id)
    //console.log(this.http.get(this.remindersURL + '/5' ))
  }

  public getReminders = (id) => {
    return this.http.get(this.remindersURL + '/', id)
    //console.log(this.http.get(this.remindersURL + '/5' ))
  }

  public deleteReminder = (id) => {
    return this.http.post(this.remindersURL + '/delete', id)
  }
}
