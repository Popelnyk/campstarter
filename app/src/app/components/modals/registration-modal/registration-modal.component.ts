import {Component, Input, Output} from '@angular/core';

import {EventEmitter} from "@angular/core";
import {UserService} from 'src/app/services/user.service';
import {HttpClient} from "@angular/common/http"

export const REGISTRATION_MODAL = 'REGISTRATION_MODAL';

@Component({
  selector: 'registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss']
})
export class RegistrationModalComponent {

  @Output() cbClose: EventEmitter<void> = new EventEmitter<void>();

  constructor(private userService: UserService, private http: HttpClient) {}

  name = '';
  username = '';
  password = '';
  repeatPassword = '';

  haveError = false;


  async onSubmit({form: {value: values}}) {
    this.name = values.name;
    this.username = values.username;
    this.password = values.password;
    this.repeatPassword = values.repeatPassword;

    const ERRORS = [400, 401, 500];

    if(this.repeatPassword == this.password) {
      await this.userService.register({username: this.username, password: this.password, campaigns: []});

      if(ERRORS.indexOf(this.userService.errors) === -1) {
        this.cbClose.emit();
        await this.userService.login({
          username: this.username,
          password: this.password
        });
      } else {
        this.haveError = true;
      }
    }
  }
}
