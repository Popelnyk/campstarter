import { Component } from '@angular/core';

// Modals
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
