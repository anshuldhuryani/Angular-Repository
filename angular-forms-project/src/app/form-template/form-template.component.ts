import { Component } from '@angular/core';

interface IUser {
  name: string;
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
}

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {

  user: IUser;

  constructor() {
    this.user = {} as IUser;
  }

  public validate(): void {
    console.log(JSON.stringify(this.user, null, 2));
  }

}
