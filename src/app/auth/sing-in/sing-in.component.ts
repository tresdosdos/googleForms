import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegService} from '../../reg.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
  registrationFrom: FormGroup;
  constructor(public registration: RegService,
              private fb: FormBuilder){ }

  ngOnInit() {
    this.registrationFrom = this.fb.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit(form: FormGroup) {
    console.log(form.value.name);
    this.registration.singIn(form.value.name, form.value.password);
  }

}
