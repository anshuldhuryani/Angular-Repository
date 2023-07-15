import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from '../utils/validation';

interface IUser {
  name: string;
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
}

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent {

  reactiveForm!: FormGroup;
  user: IUser;

  constructor() {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      nickname: new FormControl(this.user.nickname, [
        Validators.required,
        Validators.maxLength(10),
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        // emailValidator(),
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl(this.user.confirmPassword, [
        Validators.required,
        Validators.minLength(8),
      ]),
    }, {
      validators: [Validation.match('password', 'confirmPassword')]
    });
  }

  get f() {
    return this.reactiveForm.controls;
  }

  public validate(): void {
    if (this.reactiveForm.invalid) {
      for (const control of Object.keys(this.reactiveForm.controls)) {
        this.reactiveForm.controls[control].markAsTouched();
      }
      return;
    }

    this.user = this.reactiveForm.value;
    // console.log(this.user);
    console.log(JSON.stringify(this.user, null, 2));
  }
  
}
