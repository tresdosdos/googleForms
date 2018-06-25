import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(name: string, password: string) {
    this.http.post<any>('https://survey-forms.herokuapp.com/signUp', {userName: name, password: password})
      .subscribe(response => console.log(response));
  }
  signIn(name: string, password: string) {
    this.http.post<any>('https://survey-forms.herokuapp.com/signIn', {userName: name, password: password})
      .subscribe(response => console.log(response));
  }
}
