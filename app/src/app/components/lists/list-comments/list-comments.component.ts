import { Component, OnInit, Input } from '@angular/core';

export interface IComment {
  owner: string;
  text: string;
  creationDate: string;
  likes: number;
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
