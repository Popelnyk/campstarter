import {Component, OnInit, OnChanges, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ICampaign, ICampaignBonus, ICampaignTag} from "../../../services/campaigns.service";
import {UserService} from "../../../services/user.service";
import {ModalsService} from "../../../services/modals.service";
import {DONATE_MODAL} from "../../modals/donate-modal/donate-modal.component";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-campaign-profile',
  templateUrl: './campaign-profile.component.html',
  styleUrls: ['./campaign-profile.component.scss']
})
export class CampaignProfileComponent implements OnInit, OnChanges, ICampaign {

  @Output() urls: Array<any> = [];
  @Output() zippedUrls: Array<any> = [];
  @Output() id:number = null;
  @Output() ownerId: string | number = null;
  name:string = '';
  about:string = '';
  owner:string = '';
  theme:string = '';
  videoLink:string = '';
  goalAmount:number = null;
  curAmount:number = null;
  tags: Array<ICampaignTag> = [];
  bonuses:Array<ICampaignBonus> = [];


  stars = [1, 2, 3, 4, 5];

  activeStar = 0;

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
  constructor(public router: Router,private route: ActivatedRoute, private http: HttpClient,
              public userService: UserService, public modalsService: ModalsService, private sanitizer: DomSanitizer) { }

  async ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params.id;
      this.updateCampaign(this.id);
      this.updateComments(this.id);
      this.updateNews(this.id);
    });
  }

  ngOnChanges(): void {
    console.log('update');
  }

  async updateComments(id) {
    this.http.get(`http://chocoretone.pythonanywhere.com/campaigns/${id}/comments/`).subscribe(
      (data) => {
        this.comments = data;
      },
      error => console.log(error)
    );
  }

  async updateNews(id) {
    this.http.get(`http://chocoretone.pythonanywhere.com/campaigns/${id}/news/`).subscribe(
      (data) => {
        this.news = data;
        this.news = this.news.reverse()
      },
      error => console.log(error)
    )
  }

  async updateCampaign(id) {
    await this.http.get(`http://chocoretone.pythonanywhere.com/campaigns/${id}/`).subscribe(
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
        if(data['tags'])
          this.tags = JSON.parse(data['tags']);

        this.urls = [null, null, null, null, null];

        for(let item of data['files']) {
          this.urls[parseInt(item['position'])] = item;
        }

        for(let item of this.urls) {
          if(item != null) {
            this.zippedUrls.push(item);
          }
        }
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

    this.http.post(`http://chocoretone.pythonanywhere.com/campaigns/${this.id}/rating/`, JSON.stringify({value: star}), this.httpOptions)
      .subscribe(
        () => {
          this.activeStar = star;
        },
        () => {
          this.isBlockedStar = true;
        }
      );

  }

  notFinished() {
    return !(this.curAmount >= this.goalAmount);
  }

  onPostComment(message) {
    const data = {
      message,
      userId: this.userService.userId,
      date: new Date
    };

    this.http.post(`http://chocoretone.pythonanywhere.com/campaigns/${this.id}/comments/`,
      JSON.stringify({text:data.message, campaign: this.id}), this.httpOptions).subscribe(
        data => {
          console.log(data);
          this.comments.push(data);
          },
      error => console.log(error)
    )
  }

  onPostNew() {
    this.modalsService.open(this.modalsService.modals.POST_NEW_MODAL, {id: this.id})
  }

  onDonate() {
    this.modalsService.open(DONATE_MODAL, {id: this.id});
  }

  isOwner() {
    return this.ownerId == this.userService.userId
  }

  getYoutubeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoLink.replace('watch?v=', 'embed/'));
  }

  //
}
