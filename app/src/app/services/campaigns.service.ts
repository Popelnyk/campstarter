import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface ICampaign {
  name?: string;
  about?: string;
}


@Injectable()
export class CampaignsService {



  public bestCampaign: ICampaign = {};
  public listOfCampaigns: Array<ICampaign> = [];

  constructor(private http: HttpClient) {
  }


  setBestCampaign(campaign) {
    this.bestCampaign = campaign;
  }

  setListOfCampaigns(list) {
    this.listOfCampaigns = list;
  }

  getListOfCampaigns() {
    this.http.get('http://127.0.0.1:8000/campaigns/').subscribe(
      (data) => this.setListOfCampaigns(data),
      error => console.warn(`${error.statusText} :: getListOfCampaigns`)
    );
  }

  getBestCampaign() {
    this.http.get('http://127.0.0.1:8000/campaigns/best/').subscribe(
      (data) => this.setBestCampaign(data[0]),
      error => console.warn(`${error.statusText} :: getBestCampaign`)
    );
  }


}
