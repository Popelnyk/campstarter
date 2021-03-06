import {Component, NgZone, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject, Subscription} from "rxjs";
import {ModalsService} from "../../../services/modals.service";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../services/user.service";
import { Observable } from 'rxjs'
import {CampaignsService} from "../../../services/campaigns.service";
import {DONATE_MODAL} from "../../modals/donate-modal/donate-modal.component";
import {EDIT_USER_PROFILE_MODAL} from "../../modals/edit-user-profile-modal/edit-user-profile-modal.component";

interface ICampaign {
  name?: string;
  about?: string;
  id: string | number;
}

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{


  public id:number = null;
  public name:string = null;
  public hometown:string = '';
  public work:string = '';
  public hobbies:string = '';
  public money:number = null;
  public listOfCampaigns:Array<ICampaign> = [];
  public username:string = null;
  public bonuses:Array<string> = [];
  public balance: number = null;

  error = false;

  private routeSub: Subscription;
  constructor(private router: Router, private route: ActivatedRoute,
              private http: HttpClient, public userService: UserService,
              public modalsService: ModalsService, private _ngZone: NgZone,
              public campaignService: CampaignsService) { }

  async ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params.id;
      this.profileUpdate(this.id);
    });
  }

  async profileUpdate(id) {
    this.http.get(`http://chocoretone.pythonanywhere.com/users/${id}/`).subscribe(
      (data) => {
        this.name = data['name'];
        this.hometown = data['hometown'];
        this.work = data['work'];
        this.hobbies = data['hobbies'];
        this.listOfCampaigns = data['campaigns'];
        this.listOfCampaigns = this.listOfCampaigns.reverse();
        this.money = data['money'];
        this.username = data['username'];
        this.bonuses = data['bonuses'];
        this.balance = data['money'];
      },
      error => {
        this.router.navigate(['/404']);
      }
    )
  }

  isOwner() {
    return this.id == this.userService.userId
  }

  editProfile() {
      this.modalsService.open(EDIT_USER_PROFILE_MODAL, {id: this.id, name: this.name, hometown:this.hometown,
      work: this.work, hobbies: this.hobbies});
  }

}
