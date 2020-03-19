import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {CampaignsService} from "../../../services/campaigns.service";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  listOfCampaigns = this.campaignsService.getListOfCampaigns();

  constructor(public campaignsService: CampaignsService, private route:ActivatedRoute,
              private userService: UserService) { }


  ngOnInit(): void {
    this.campaignsService.getBestCampaign();
    //this.campaignsService.getListOfCampaigns();
    this.route.queryParams.subscribe(
      data => {
        if(data['code']) {
          this.userService.code = data['code'];
          this.userService.loginFacebook()
        }
      }
    )
  }
}
