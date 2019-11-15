import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormAService {
  private stockTypesUrl = environment.apiUrl + '/api/app_user'

  constructor(private http: HttpClient) { }

  public create = (parms) => {
    return this.http.post('http://localhost:3000/api/icap-a' + '/create_icap_a', parms)
  }
}
