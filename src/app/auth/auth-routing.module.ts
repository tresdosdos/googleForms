import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthButtonsComponent} from './auth-buttons/auth-buttons.component';

const routes: Routes = [
    { path: '', component: AuthButtonsComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
