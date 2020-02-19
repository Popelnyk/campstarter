import {Component, Input, Output} from '@angular/core';

import {EventEmitter} from "@angular/core";

@Component({
  selector: 'auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent {

  login = '';
  password = '';
  @Input() isOpen;

  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  onSubmit(event) {
    console.log(this.login, this.password);
  }

  onClose() {
    this.toggle.emit(false);
  }

}
