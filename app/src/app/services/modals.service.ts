import { Injectable } from '@angular/core';
import {AUTH_MODAL} from "../components/modals/auth-modal/auth-modal.component";
import {REGISTRATION_MODAL} from "../components/modals/registration-modal/registration-modal.component";
import {CREATE_CAMPAIGN_MODAL} from "../components/modals/create-campaign-modal/create-campaign-modal.component";

@Injectable()
export class ModalsService {

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

  openedModals = {
    [AUTH_MODAL]: false,
    [REGISTRATION_MODAL]: false,
    [CREATE_CAMPAIGN_MODAL]: true
  };

  modals = {
    AUTH_MODAL,
    REGISTRATION_MODAL,
    CREATE_CAMPAIGN_MODAL
  };


  close(type: string) {
    this.openedModals[type] = false;
  }

  open(type: string) {
    this.openedModals[type] = true;
  }

}
