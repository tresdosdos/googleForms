import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public registrationFrom: FormGroup;
  constructor(private auth: AuthService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.registrationFrom = this.fb.group(
      {
        name: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit(form: FormGroup) {
    this.auth.signIn(form.value.name, form.value.password);
  }

}
