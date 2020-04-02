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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit({form: {value: values}}): void {
    let data_new = {'id': this.userService.userId,
      'hometown': values['user-hometown'], 'work': values['user-work'], 'hobbies': values['user-hobbies']};
    this.userService.updateUserInfo(data_new);
    this.cbClose.emit();
  }
}
