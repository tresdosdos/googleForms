import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {QuestionBuilderComponent} from "./question-builder/question-builder.component";
import {AppModule} from './app.module';
import {HeaderComponent} from './header/header.component';

const routes: Routes = [
  { path: '', component: HeaderComponent},
  {path: 'singIn', loadChildren: './auth/auth.module#AuthModule'},
  { path: 'question/:id', component: QuestionBuilderComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
