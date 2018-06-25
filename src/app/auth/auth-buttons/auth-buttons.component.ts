import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-auth-buttons',
  templateUrl: './auth-buttons.component.html',
  styleUrls: ['./auth-buttons.component.css']
})
export class AuthButtonsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  signIn() {
    this.dialog.open(SignInComponent);
  }
  signUp() {
    this.dialog.open(SignUpComponent);
  }
  ngOnInit() {
  }
}
