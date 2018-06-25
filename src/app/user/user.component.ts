import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegService} from '../reg.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  registrationFrom: FormGroup;
  constructor(public registration: RegService, private fb: FormBuilder,
              public dialogRef: MatDialogRef<UserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.registrationFrom = this.fb.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit(form: FormGroup) {
    if (form.value.password === form.value.cpassword) {
    this.registration.singUp(form.value.name, form.value.password);
    } else {
      alert('Wrong password!');
    }
  }
  close() {
    this.dialogRef.close();
  }
}
