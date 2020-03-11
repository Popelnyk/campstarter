import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CampaignsService, ICampaign, ICampaignBonus} from "../../../services/campaigns.service";
import {UserService} from "../../../services/user.service";

export const EDIT_USER_PROFILE_MODAL = "EDIT_USER_PROFILE_MODAL";


@Component({
  selector: 'edit-user-profile-modal',
  templateUrl: './edit-user-profile-modal.component.html',
  styleUrls: ['./edit-user-profile-modal.component.scss']
})
export class EditUserProfileModalComponent implements OnInit {

  @Output() cbClose: EventEmitter<void> = new EventEmitter<void>();
  @Input() data;


  ngOnInit(): void {
  }

  onSubmit({form: {value: values}}): void {
    console.log(values);
    this.cbClose.emit();
  }
}
