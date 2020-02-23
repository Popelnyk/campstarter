import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CampaignsService, ICampaign} from "../../../services/campaigns.service";

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
  description = '';
  videoLink = '';
  amountMoney = 0;
  bonuses = [];

  addingTag = false;

  constructor(public campaignsService: CampaignsService) { }

  ngOnInit(): void {
  }

  onSubmit({form: {value: values}}): void {
    this.name = values['campaign-name'];
    this.description = values.description;
    this.videoLink = values['video-link'];
    this.amountMoney = +values['amount-aim'];
    this.cbClose.emit();
  }

  onChooseTheme(theme) {
    this.theme = theme;
  }

  addTag(target) {
    if(target.value.length) {
      this.tags.push(target.value);
      this.addingTag = false;
    }

    target.value = '';

  }

  addBonus(inputDesc, inputAmount) {
    const description = inputDesc.value;
    const amount = inputAmount.value;

    if(description.length && amount.length) {
      this.bonuses.push({
        amount: +amount,
        description
      });
      inputDesc.value = '';
      inputAmount.value = '';
    }

  }

}
