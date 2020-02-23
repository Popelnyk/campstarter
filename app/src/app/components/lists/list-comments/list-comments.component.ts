import { Component, OnInit, Input } from '@angular/core';

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
export class ListCommentsComponent implements OnInit {

  @Input() comments: Array<IComment>;

  constructor() { }

  ngOnInit(): void {
  }

}
