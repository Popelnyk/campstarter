import { Component } from '@angular/core';


// Modals
import {AUTH_MODAL} from "./components/modals/auth-modal/auth-modal.component";
import {REGISTRATION_MODAL} from "./components/modals/registration-modal/registration-modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  openedModals = {
    [AUTH_MODAL]: false,
    [REGISTRATION_MODAL]: false
  };

  modals = {
    AUTH_MODAL,
    REGISTRATION_MODAL
  };

  constructor() {
    this.initModals();
  }

  initModals(): void {
    for (const modalKey in this.modals) {
      if (this.modals.hasOwnProperty(modalKey)) {
        this.openedModals[modalKey] = false;
      }
    }
  }

  close(type: string) {
    this.openedModals[type] = false;
  }

  open(type: string) {
    this.openedModals[type] = true;
  }

}
