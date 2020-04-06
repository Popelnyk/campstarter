import { Component, OnInit } from '@angular/core';
import {CampaignsService, ICampaign} from "../../../services/campaigns.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {

  campaigns: Array<ICampaign> = [];

  constructor(public campaignService: CampaignsService, private http:HttpClient) {}

  ngOnInit(): void {
    console.log(this.campaignService.tagId);

    this.http.get(`http://chocoretone.pythonanywhere.com/tags/${this.campaignService.tagId}/`).subscribe(
      data => {
        this.setCampaigns(data);
      }
    );
  }

  setCampaigns(data) {
    this.campaigns = data;
  }

}
