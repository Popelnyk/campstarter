import {AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
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
    this.scrollContainer.style = 'height: 170px';
    if(this.itemElements.length < 6) {
      this.scrollContainer.style = `height:${200 * this.itemElements.length}px`;
    }
    else
      this.scrollContainer.style = 'height:510px';
    this.itemElements.changes.subscribe(_ => this.onItemElementsChanged());
  }

  private onItemElementsChanged(): void {
    if(this.itemElements.length < 6) {
      this.scrollContainer.style = `height:${200 * this.itemElements.length}px`;
    }
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
    await this.http.post(`http://chocoretone.pythonanywhere.com/comments/${id}/like/`, JSON.stringify({comment:id}) ,
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
