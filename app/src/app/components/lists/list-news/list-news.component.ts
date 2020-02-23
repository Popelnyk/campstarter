import { Component, OnInit, Input } from '@angular/core';

export interface INews {
  title: string,
  about: string,
  creation_date: string,
  id: string | number;
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

}