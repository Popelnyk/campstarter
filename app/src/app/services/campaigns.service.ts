import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface ICampaignBonus {
  amount: number,
  description: string;
}

export interface ICampaign {
  name: string;
  description: string;
  theme: string,
  tags: Array<string>;
  videoLink:string;
  amountMoney: number;
  bonuses: Array<ICampaignBonus>;
}


@Injectable()
export class CampaignsService {

  public themes = ['Game', 'IT', 'Arts', 'Education', 'Electronics'];

  public bestCampaign: ICampaign = null;
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
