import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'tags-view',
  templateUrl: './tags-view.component.html',
  styleUrls: ['./tags-view.component.scss']
})
export class TagsViewComponent implements OnInit {
  // @Input("tags") tags;
  tags: any;
  colors = ["#7059FF", "#339DFF", "#1EC745", "#1E86C7", "#EB4E4F"];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/tags/').subscribe(
      data => this.tags = data,
      error => console.log(error)
    )
  }

}
