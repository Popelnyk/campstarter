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

  @Input() open;
  @Output() cbClose: EventEmitter<void> = new EventEmitter<void>();

  constructor(private userService: UserService, private http: HttpClient) {}

  name = '';
  username = '';
  password = '';
  repeatPassword = '';


  async onSubmit({form: {value: values}}) {
    this.name = values.name;
    this.username = values.username;
    this.password = values.password;
    this.repeatPassword = values.repeatPassword;

    if(this.repeatPassword == this.password) {
      this.userService.register({username: this.username, password: this.password, campaigns: []});
      this.cbClose.emit()
    }
  }
}
