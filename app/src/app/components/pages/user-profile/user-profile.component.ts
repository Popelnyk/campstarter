import {Component, OnInit} from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, Subscription} from "rxjs";
import {ModalsService} from "../../../services/modals.service";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../services/user.service";
import { Observable } from 'rxjs'

interface ICampaign {
  name?: string;
  about?: string;
}

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{


  public id:number = null;
  public name:string = '';
  public hometown:string = '';
  public work:string = '';
  public hobbies:string = '';
  public money:number = null;
  public listOfCampaigns:Array<ICampaign> = [];

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute, private http: HttpClient, private userService: UserService, public modalsService: ModalsService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.profileUpdate(this.id);
  }

  async profileUpdate(id) {
    await this.http.get(`http://127.0.0.1:8000/users/${id}/`).subscribe(
      (data) => {
        this.name = data['name'];
        this.hometown = data['hometown'];
        this.work = data['work'];
        this.hobbies = data['hobbies'];
        this.listOfCampaigns = data['campaigns'];
        this.money = data['money'];
      }
    )
  }

  isOwner() {
    return this.id == this.userService.userId
  }

}
