import { Component } from '@angular/core';


// Modals
import {AUTH_MODAL} from "./components/modals/auth-modal/auth-modal.component";
import {REGISTRATION_MODAL} from "./components/modals/registration-modal/registration-modal.component";
import {HttpClient} from "@angular/common/http";

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

  public bestCampaign: any;
  public listOfCampaigns: any;

  constructor(private http: HttpClient) {
    this.initModals();
  }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/campaigns/best/').subscribe(
      (data) => this.bestCampaign = data[0]
    )

    this.http.get('http://127.0.0.1:8000/campaigns/').subscribe(
      (data) => this.listOfCampaigns = data
    )
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
