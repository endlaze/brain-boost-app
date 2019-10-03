import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private stockTypesUrl = environment.apiUrl + '/api/app_user'

  constructor(private http: HttpClient) { }

  public create = (user) => {
    return this.http.post(this.stockTypesUrl + '/create', user)
  }
}
