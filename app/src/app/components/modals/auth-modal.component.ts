import {Component, Input, Output} from '@angular/core';

import {EventEmitter} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {UserService} from 'src/app/user.service';

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
    await this.userService.login({'username': this.login, 'password': this.password});
    console.log('from onSubmit', this.userService.errors);
    this.cbClose.emit();
  }

}
