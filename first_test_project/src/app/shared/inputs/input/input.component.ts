import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  user?: User;
  usernameFormControl = new FormControl('', [Validators.required, Validators.pattern(/[a-zA-Z]/)]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.pattern(/[a-zA-Z0-9]/)]);

  constructor() { }

  ngOnInit(): void {
  }

}
