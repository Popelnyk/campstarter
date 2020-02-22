import { Component, OnInit } from '@angular/core';
import {CampaignsService} from "../../../services/campaigns.service";

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit{


  constructor(public campaignsService: CampaignsService) {
  }

  ngOnInit(): void {
    this.campaignsService.getBestCampaign();
    this.campaignsService.getListOfCampaigns();
  }


}
