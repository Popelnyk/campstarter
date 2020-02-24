import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserService} from "../../../services/user.service";

export const DONATE_MODAL = 'DONATE_MODAL';

@Component({
  selector: 'donate-modal',
  templateUrl: './donate-modal.component.html',
  styleUrls: ['./donate-modal.component.scss']
})
export class DonateModalComponent {

  amount:number;
  id: number | string;

  constructor(private http: HttpClient, private userService: UserService) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userService.token}`
    })
  };

  @Output() cbClose: EventEmitter<void> = new EventEmitter<void>();
  @Input() data;

  onSubmit({form: {value: values}}) {
    this.amount = values.amount;
    this.id = this.data.id;

    this.http.post(`http://127.0.0.1:8000/campaigns/${this.id}/donate/`,
      JSON.stringify({campaign_id:this.id, user_id:this.userService.userId, value:this.amount}),
      this.httpOptions).subscribe(
        data => {
          console.log(data);
        },
      error => {
          console.log(error);
          if(error['status'] == 200) {
            this.cbClose.emit();
            window.location.reload();
          }
        }
    )
  }

}
