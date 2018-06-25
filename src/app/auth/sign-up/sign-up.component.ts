import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public registrationFrom: FormGroup;
  constructor(private fb: FormBuilder,
              private auth: AuthService) { }

  ngOnInit() {
    this.registrationFrom = this.fb.group(
      {
        name: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        compPassword: ['', [Validators.required, Validators.minLength(6)]]
      });
  }
  onSubmit(form: FormGroup) {
    this.auth.signUp(form.value.name, form.value.password);
  }

}
