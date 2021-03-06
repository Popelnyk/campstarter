import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserService} from "./user.service";
import {Observable} from "rxjs";

export interface ICampaignBonus {
  value: number,
  about: string;
}

export interface ICampaignTag {
  name: string;
}

export interface ICampaign {
  name: string;
  about: string;
  theme: string,
  videoLink:string;
  goalAmount: number;
  curAmount: number;
  bonuses: Array<ICampaignBonus>;
  tags: Array<ICampaignTag>;
  ownerId: string | number;
  id: string | number;
}


@Injectable()
export class CampaignsService {

  public themes = ['Game', 'IT', 'Arts', 'Education', 'Electronics'];

  public bestCampaign: ICampaign = null;
  public listOfCampaigns: Array<ICampaign> = [];
  public listOfCampaignsObservable: Observable<any>;
  public tagId:number = null;

  private httpOptionsWithToken = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userService.token}`
    })
  };

  constructor(private http: HttpClient, private userService: UserService) {
  }

  setBestCampaign(campaign) {
    this.bestCampaign = campaign;
  }

  setListOfCampaigns(list) {
    this.listOfCampaigns = list;
  }

  getListOfCampaigns() {
    return this.http.get('http://chocoretone.pythonanywhere.com/campaigns/');
    /*
    this.http.get('http://127.0.0.1:8000/campaigns/').subscribe(
      (data) => this.setListOfCampaigns(data),
      error => console.warn(`${error.statusText} :: getListOfCampaigns`)
    );
     */
  }

  getBestCampaign() {
    this.http.get('http://chocoretone.pythonanywhere.com/campaigns/best/').subscribe(
      (data) => this.setBestCampaign(data[0]),
      error => console.warn(`${error.statusText} :: getBestCampaign`)
    );
  }


  registerCampaign(campaign) {
    this.http.post('http://chocoretone.pythonanywhere.com/campaigns/', JSON.stringify(campaign), this.httpOptionsWithToken).subscribe(
      (data) => {
        console.log(data);
        window.location.reload();
      },
      error => console.log(error)
    )
  }

  deleteCampaign(id) {
    this.http.delete(`http://chocoretone.pythonanywhere.com/campaigns/${id}/`, this.httpOptionsWithToken).subscribe(
      (data) => {
        console.log(data);
        window.location.reload();
      },
    (error) => console.log(error)
    )
  }

  setTag(tagId) {
    this.tagId = tagId;
  }
}
