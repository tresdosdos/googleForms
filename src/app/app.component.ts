import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store'; // <- New
import { CounterActions } from './app.actions'; // <- New
import { UserState } from '../store'; // <- New

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: any;
  question: any;
  subscription; // <- New;
  constructor(                           // <- New
    private ngRedux: NgRedux<UserState>, // <- New
    private actions: CounterActions) {
    this.subscription = ngRedux.select<any>('author') // <- New
      .subscribe(newCount => this.count = newCount);
    this.subscription = ngRedux.select<any>('questions') // <- New
      .subscribe(newQuest => this.question = newQuest);
  }  // <- New
  ngOnDestroy() {                    // <- New
    this.subscription.unsubscribe(); // <- New
  }
  increment() {
    this.ngRedux.dispatch(this.actions.increment()); // <- New
  }

  decrement() {
    this.ngRedux.dispatch(this.actions.decrement()); // <- New
  }
  check(){
    console.log(this.count);
    console.log(this.question);
  }
}
