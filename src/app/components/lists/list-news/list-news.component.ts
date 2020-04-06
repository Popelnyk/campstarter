import { Component, OnInit, Input } from '@angular/core';

export interface INews {
  title: string,
  about: string,
  creation_date: string,
  id: string | number;
  isBig: boolean;
}

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {

  @Input() news: Array<INews>;

  constructor() { }

  ngOnInit(): void {

  }

  readMore(openOrClose):string {
    if (openOrClose)
      return 'read more';
    else return 'hide';
  }

}
