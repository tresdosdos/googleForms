import { Component, OnInit } from '@angular/core';
import {RegService} from '../reg.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import {UserComponent} from '../user/user.component';
import {AuthComponent} from '../auth/auth.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  constructor(public reg: RegService,
              private fb: FormBuilder,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {

  }
  openDialogRegistration() {
     this.dialog.open(UserComponent, {data: {name: 'Artur'}});
  }
  openDialogAuth() {
  this.dialog.open(AuthComponent, {data: {name: 'Artur'}});
  }

  redirect() {
    this.router.navigate(['/question/0']);
  }
}
