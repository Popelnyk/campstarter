import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ICampaign, ICampaignBonus} from "../../../services/campaigns.service";
import {UserService} from "../../../services/user.service";
import {ModalsService} from "../../../services/modals.service";
import {DONATE_MODAL} from "../../modals/donate-modal/donate-modal.component";

@Component({
  selector: 'app-campaign-profile',
  templateUrl: './campaign-profile.component.html',
  styleUrls: ['./campaign-profile.component.scss']
})
export class CampaignProfileComponent implements OnInit, ICampaign {

  id:number = null;
  name:string = '';
  about:string = '';
  owner:string = '';
  ownerId: string | number = null;
  theme:string = '';
  videoLink:string = '';
  goalAmount:number = null;
  curAmount:number = null;
  tags: Array<string> = [];
  bonuses:Array<ICampaignBonus> = [];


  stars = [1, 2, 3, 4, 5];

  activeStar = 2;

  tabs = ["NEWS", "COMMENTS"];

  currentTab = this.tabs[0];

  news: any = [];

  comments: any = [];

  isBlockedStar:boolean = false;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userService.token}`
    })
  };

  private routeSub: Subscription;
  constructor(public router: Router,private route: ActivatedRoute, private http: HttpClient, public userService: UserService, public modalsService: ModalsService) { }

  async ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params.id;
      this.updateCampaign(this.id);
      this.updateComments(this.id);
      this.updateNews(this.id);
      if(!this.block(this.id)) {
        this.isBlockedStar = false;
      }
    });
  }

  updateComments(id) {
    this.http.get(`http://127.0.0.1:8000/campaigns/${id}/comments/`).subscribe(
      (data) => {
        this.comments = data;
      },
      error => console.log(error)
    )
  }

  updateNews(id) {
    this.http.get(`http://127.0.0.1:8000/campaigns/${id}/news/`).subscribe(
      (data) => {
        this.news = data;
      },
      error => console.log(error)
    )
  }

  async updateCampaign(id) {
    await this.http.get(`http://127.0.0.1:8000/campaigns/${id}/`).subscribe(
      (data) => {
        this.name = data['name'];
        this.theme = data['theme'];
        this.about = data['about'];
        this.videoLink = data['youtube_link'];
        this.owner = data['owner'];
        this.goalAmount = parseInt(data['goal_amount_of_money']);
        this.curAmount = parseInt(data['current_amount_of_money']);
        this.activeStar = parseInt(data['total_rating']);
        this.ownerId = data['owner_id'];
        if(data['bonuses'])
          this.bonuses = JSON.parse(data['bonuses']);
      },
      error => {
          this.router.navigate(['/404']);
      }
    );
  }

  onTabClick({tabName}) {
    this.currentTab = tabName;
  }

  onSelectStar(star) {

    this.http.post(`http://127.0.0.1:8000/campaigns/${this.id}/rating/`, JSON.stringify({value:star}),
      this.httpOptions).subscribe(
      (data) => {
        console.log(data);
        this.isBlockedStar = true;
      },
      error => console.log(error)
    );
    this.activeStar = star;
  }

  block(id) {
    return this.userService.userId == id;
  }

  onPostComment(message) {
    const data = {
      message,
      userId: this.userService.userId,
      date: new Date
    };
  }

  onDonate() {
    this.modalsService.open(DONATE_MODAL, {id: this.id});
  }

  //
}
