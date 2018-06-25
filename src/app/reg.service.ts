import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor(private http: HttpClient) { }

  singUp(name: string, password: string) {
    this.http.post<any>('https://survey-forms.herokuapp.com/signUp', {userName: name, password: password})
      .subscribe(response => console.log(response));
  }
  singIn(name: string, password: string) {
    this.http.post<any>('https://survey-forms.herokuapp.com/signIn', {userName: name, password: password})
      .subscribe(response => console.log(response));
  }
}
