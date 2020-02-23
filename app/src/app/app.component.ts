import { Component } from '@angular/core';

// Modals
import {AUTH_MODAL} from "./components/modals/auth-modal/auth-modal.component";
import {REGISTRATION_MODAL} from "./components/modals/registration-modal/registration-modal.component";
import {CREATE_CAMPAIGN_MODAL} from "./components/modals/create-campaign-modal/create-campaign-modal.component";
import {ModalsService} from "./services/modals.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public modalsService: ModalsService) {}

  closeModal(type: string) {
    this.modalsService.close(type);
  }

  openModal(type: string) {
    this.modalsService.open(type);
  }

}
