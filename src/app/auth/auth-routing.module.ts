import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SingInComponent} from './sing-in/sing-in.component';
import {AuthButtonsComponent} from './auth-buttons/auth-buttons.component';

const routes: Routes = [
    {path: '', component: AuthButtonsComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
