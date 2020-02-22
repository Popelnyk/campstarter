import {Component, Input, Output} from '@angular/core';

import {EventEmitter} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {UserService} from 'src/app/user.service';

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

  onSubmit(event) {
    this.userService.login({'username': this.login, 'password': this.password});
    console.log('from onSubmit', this.userService.errors);
    if(!(this.userService.errors == 400) && !(this.userService.errors == 401)) {
      this.cbClose.emit();
    }
  }

}
