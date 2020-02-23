import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserService} from "./user.service";
import {BehaviorSubject, Observable} from "rxjs";

export interface ICampaignBonus {
  amount: number,
  description: string;
}

export interface ICampaign {
  name: string;
  about: string;
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

  constructor(private http: HttpClient, private userService: UserService) {
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

  registerCampaign(campaign, bonuses) {
    console.log(campaign);
    console.log(this.userService.token);

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.userService.token}`
      })
    };

    this.http.post('http://127.0.0.1:8000/campaigns/', JSON.stringify(campaign), httpOptions).subscribe(
      (data) => {
        console.log(data);
        /*for(let i = 0; i < bonuses.length; i+=1) {
          this.http.post(`http://127.0.0.1:8000/campaigns/${data['id']}/addBonus/`, JSON.stringify(bonuses[i]),
            httpOptions).subscribe(
            (data) => console.log(data),
            error => console.log(error)
          )
        }*/
      },
      error => console.log(error)
    )
  }

}
