import {Component, Input, Output} from '@angular/core';

import {EventEmitter} from "@angular/core";
import {UserService} from 'src/app/services/user.service';

export const AUTH_MODAL = 'AUTH_MODAL';

@Component({
  selector: 'auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent {

  login = '';
  password = '';

  @Input() open;

  @Output() cbClose: EventEmitter<void> = new EventEmitter<void>();

  constructor(private userService: UserService) {
  }

  async onSubmit(event) {
    await this.userService.login({
      username: this.login,
      password: this.password
    }).catch(error => console.error(error));

    if(!(this.userService.errors === 400) && !(this.userService.errors === 401)) {
      this.cbClose.emit();
    }
  }

}
