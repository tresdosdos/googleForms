import { Component, OnInit } from '@angular/core';
import {RegService} from "../reg.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationFrom : FormGroup;
  constructor(public reg: RegService,private fb: FormBuilder,private router : Router) { }

  ngOnInit() {
    this.registrationFrom = this.fb.group({
      name: ['Benedict', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.password);
    console.log('Message', form.value.cpassword);
  }
  redirect(){
    this.router.navigate(['/question/0']);
  }
}
