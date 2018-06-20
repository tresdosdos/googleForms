import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {QuestionBuilderComponent} from "./question-builder/question-builder.component";
import {RegistrationComponent} from "./registration/registration.component";

const routes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'question/:id', component: QuestionBuilderComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
