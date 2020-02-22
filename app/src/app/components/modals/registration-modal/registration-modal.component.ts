import {Component, Input, Output} from '@angular/core';

import {EventEmitter} from "@angular/core";
import {UserService} from 'src/app/user.service';

export const REGISTRATION_MODAL = 'REGISTRATION_MODAL';

@Component({
  selector: 'registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss']
})
export class RegistrationModalComponent {

  @Input() open;
  @Output() cbClose: EventEmitter<void> = new EventEmitter<void>();

  name = '';
  username = '';
  password = '';
  repeatPassword = '';


  onSubmit({form: {value: values}}) {
    this.name = values.name;
    this.username = values.username;
    this.password = values.password;
    this.repeatPassword = values.repeatPassword;
  }

}
