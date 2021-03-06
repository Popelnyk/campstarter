import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CampaignsService, ICampaign, ICampaignBonus} from "../../../services/campaigns.service";

export const CREATE_CAMPAIGN_MODAL = "CREATE_CAMPAIGN_MODAL";


@Component({
  selector: 'create-campaign-modal',
  templateUrl: './create-campaign-modal.component.html',
  styleUrls: ['./create-campaign-modal.component.scss']
})
export class CreateCampaignModalComponent implements OnInit, ICampaign  {

  @Output() cbClose: EventEmitter<void> = new EventEmitter<void>();

  name = '';
  theme = '';
  tags = [];
  about = '';
  videoLink = '';
  amountMoney = 0;
  bonuses = [];
  id = '';
  goalAmount: number = null;
  curAmount: number = null;
  ownerId: string | number = null;

  addingTag = false;

  constructor(public campaignsService: CampaignsService) { }

  ngOnInit(): void {
  }

  onSubmit({form: {value: values}}): void {
    let bad = false;
    let valid = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;

    this.name = values['campaign-name'];
    this.about = values.description;

    this.videoLink = values['video-link'];
    if(!valid.test(this.videoLink)) {
      bad = true;
    }

    this.amountMoney = +values['amount-aim'];

    if(!bad) {
      this.campaignsService.registerCampaign(
        {
          name: this.name, theme: this.theme, about: this.about,
          youtube_link: this.videoLink, goal_amount_of_money: this.amountMoney, bonuses: JSON.stringify(this.bonuses),
          tags: JSON.stringify(this.tags)
        }
      );
      this.cbClose.emit();
    }
  }

  onChooseTheme(theme) {
    this.theme = theme;
  }

  addTag(target) {
    if(target.value.length) {
      this.tags.push({name: target.value});
      this.addingTag = false;
    }

    target.value = '';

  }

  addBonus(inputDesc, inputAmount) {
    const about = inputDesc.value;
    const amount = inputAmount.value;

    if(about.length && amount.length) {
      this.bonuses.push({
        value: +amount,
        about: about
      });
      inputDesc.value = '';
      inputAmount.value = '';
    }

  }

}
