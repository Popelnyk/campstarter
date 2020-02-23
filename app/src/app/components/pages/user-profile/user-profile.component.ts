import {Component, OnInit} from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../services/user.service";

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
  public listOfCampaigns:Array<ICampaign> = [];

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute, private http: HttpClient, private userService:UserService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params.id;
      this.profileUpdate(params.id)
    });
  }

  profileUpdate(id) {
    this.http.get(`http://127.0.0.1:8000/users/${parseInt(id)-1}/`).subscribe(
      (data) => {
        this.name = data['name'];
        this.hometown = data['hometown'];
        this.work = data['work'];
        this.hobbies = data['hobbies'];
        this.listOfCampaigns = data['campaigns'];
      }
    )
  }

  isOwner() {
    return this.id == this.userService.userId
  }

}
