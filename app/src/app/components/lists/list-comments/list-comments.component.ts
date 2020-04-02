import {AfterViewInit, Component, ElementRef, Input, QueryList, ViewChild, ViewChildren} from '@angular/core';
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
export class ListCommentsComponent implements AfterViewInit {

  @ViewChild('scrollframe', {static: false}) scrollFrame: ElementRef;
  @ViewChildren('item') itemElements: QueryList<any>;

  private scrollContainer: any;

  ngAfterViewInit() {
    this.scrollContainer = this.scrollFrame.nativeElement;
    this.itemElements.changes.subscribe(_ => this.onItemElementsChanged());
  }

  private onItemElementsChanged(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }


  @Input() comments: any;

  constructor(private http: HttpClient, private userService: UserService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userService.token}`
    })
  };

  async onLike(id, index) {
    await this.http.post(`http://127.0.0.1:8000/comments/${id}/like/`, JSON.stringify({comment:id}) ,
      this.httpOptions).subscribe(
      data => {
        if(data['id']) {
          this.comments[index].likes_count++;
        }
        else {
          this.comments[index].likes_count--;
        }
      },
      error => console.log(error)
    )
  }

}
