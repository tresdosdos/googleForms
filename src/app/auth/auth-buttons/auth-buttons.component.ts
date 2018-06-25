import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AuthComponent} from '../auth.component';
import {SingInComponent} from '../sing-in/sing-in.component';

@Component({
  selector: 'app-auth-buttons',
  templateUrl: './auth-buttons.component.html',
  styleUrls: ['./auth-buttons.component.css']
})
export class AuthButtonsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.dialog.open(SingInComponent);
  }
/*
this.dialog.open(AuthComponent);
 */
}
