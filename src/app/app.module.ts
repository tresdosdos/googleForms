import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { QuestionBuilderComponent } from './question-builder/question-builder.component';
import { AppRoutingModule } from './app-routing.module';
import {CounterActions} from './app.actions';
import { combineReducers } from './reducers';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    QuestionBuilderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [CounterActions, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<UserState>) {
    // Tell @angular-redux/store about our rootReducer and our initial state.
    // It will use this to create a redux store for us and wire up all the
    // events.
    ngRedux.configureStore(
      combineReducers);
  }
}
