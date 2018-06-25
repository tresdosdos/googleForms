import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UserComponent} from '../user/user.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegService} from '../reg.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  registrationFrom: FormGroup;
  constructor(public registration: RegService, private fb: FormBuilder,
              public dialogRef: MatDialogRef<UserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.registrationFrom = this.fb.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit(form: FormGroup) {
    console.log(form.value.name)
      this.registration.singIn(form.value.name, form.value.password);
  }

}
