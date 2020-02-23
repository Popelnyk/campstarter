import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ICampaign, ICampaignBonus} from "../../../services/campaigns.service";
import {UserService} from "../../../services/user.service";


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
  ownerId: string | number;
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

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute, private http: HttpClient, public userService: UserService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params.id;
      this.updateCampaign(this.id);
      this.updateComments(this.id);
      this.updateNews(this.id);
    });
    console.log(this.id)
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

  updateCampaign(id) {
    this.http.get(`http://127.0.0.1:8000/campaigns/${id}/`).subscribe(
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
      error => console.log(error)
    );
  }

  onTabClick({tabName}) {
    this.currentTab = tabName;
  }

  onSelectStar(star) {
    this.activeStar = star;
  }

  onPostComment(message) {
    const data = {
      message,
      userId: this.userService.userId,
      date: new Date
    };
  }

  //
}
