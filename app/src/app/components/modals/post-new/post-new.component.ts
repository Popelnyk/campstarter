import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserService} from "../../../services/user.service";

export const POST_NEW_MODAL = 'POST_NEW_MODAL';

@Component({
  selector: 'post-new-modal',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.scss']
})
export class PostNewModalComponent  {

  description = '';
  title = '';
  id = '';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userService.token}`
    })
  };

  @Output() cbClose: EventEmitter<void> = new EventEmitter<void>();
  @Input() data;

  constructor(private  http: HttpClient, private userService: UserService) { }

  onSubmit({form: {value: values}}) {
    console.log(this.data);
    this.id = this.data.id;
    this.description = values.description;
    this.title = values.title;

    this.http.post(`http://127.0.0.1:8000/campaigns/${this.id}/news/create-new/`,
      JSON.stringify({title: this.title, about: this.description, campaign: this.id}), this.httpOptions).subscribe(
        data => {
          console.log(data);
          this.cbClose.emit();
          window.location.reload();
        },
      error => console.log(error)
    )
  }



}
