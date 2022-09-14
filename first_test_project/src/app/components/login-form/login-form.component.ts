import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatAppService } from 'src/app/services/mat-app.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  loginBtnText: string = "login";

  constructor(fb: FormBuilder, private router:Router, private matappservice: MatAppService) {
    this.loginForm = fb.group({
      username: ['', [Validators.required, Validators.pattern(/[a-zA-Z]/)]],
      password: ['',  [Validators.required, Validators.pattern(/[a-zA-Z0-9]/)]],
    });
  }

  ngOnInit(): void {
  }

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  get formValue() {
    return this.loginForm.value;
  }

  onLogin(): void {
    this.matappservice.users.push(this.formValue);
    console.log(this.username);
    console.log(this.password);
    this.router.navigate(['/dashboard'])
  }

}
