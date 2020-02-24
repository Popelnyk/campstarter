import { Injectable } from '@angular/core';
import {AUTH_MODAL} from "../components/modals/auth-modal/auth-modal.component";
import {REGISTRATION_MODAL} from "../components/modals/registration-modal/registration-modal.component";
import {CREATE_CAMPAIGN_MODAL} from "../components/modals/create-campaign-modal/create-campaign-modal.component";
import {POST_NEW_MODAL} from "../components/modals/post-new/post-new.component";
import {DONATE_MODAL} from "../components/modals/donate-modal/donate-modal.component";

@Injectable()
export class ModalsService {

  constructor() {
    this.initModals();
  }

  initModals(): void {
    // for (const modalKey in this.modals) {
    //   if (this.modals.hasOwnProperty(modalKey)) {
    //     this.openedModals[modalKey] = false;
    //   }
    // }
  }

  openedModals = {
    [AUTH_MODAL]: {isOpen: false, data: {}},
    [REGISTRATION_MODAL]: {isOpen: false, data: {}},
    [CREATE_CAMPAIGN_MODAL]: {isOpen: false, data: {}},
    [POST_NEW_MODAL]: {isOpen: false, data: {}},
    [DONATE_MODAL]: {isOpen: false, data: {}}
  };

  modals = {
    AUTH_MODAL,
    REGISTRATION_MODAL,
    CREATE_CAMPAIGN_MODAL,
    POST_NEW_MODAL,
    DONATE_MODAL
  };


  close(type: string) {
    this.openedModals[type] = {isOpen: false};
  }

  open(type: string, data?) {
    this.openedModals[type] = {isOpen: true, data};
  }

}
