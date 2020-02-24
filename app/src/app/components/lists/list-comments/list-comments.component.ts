import { Component, Input } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserService} from "../../../services/user.service";

export interface IComment {
  id: number;
  owner: string;
  text: string;
  creation_date: string;
  likes_count: number;
  campaign: number;
}

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.scss']
})
export class ListCommentsComponent {

  @Input() comments: Array<IComment>;

  constructor(private http: HttpClient, private userService: UserService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userService.token}`
    })
  };

  onLike(id) {
    this.http.post(`http://127.0.0.1:8000/comments/${id}/like/`, JSON.stringify({comment:id}) ,
      this.httpOptions).subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }

}
