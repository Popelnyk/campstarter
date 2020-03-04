import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {CampaignsService} from "../../../services/campaigns.service";

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  tagsActive = true;

  constructor(public campaignsService: CampaignsService) { }

  ngOnInit(): void {
    this.campaignsService.getBestCampaign();
    this.campaignsService.getListOfCampaigns();
  }

  onTagClick(tagName) {
    this.tagsActive = false;
    this.campaignsService.getListOfCampaignsByTag(tagName);
  }


}
