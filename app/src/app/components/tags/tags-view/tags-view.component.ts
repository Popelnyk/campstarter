import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'tags-view',
  templateUrl: './tags-view.component.html',
  styleUrls: ['./tags-view.component.scss']
})
export class TagsViewComponent {
  // @Input("tags") tags;
  tags = ["tag1", "tag2", "tag3", "tag4", "tag5"];
  colors = ["#7059FF", "#339DFF", "#1EC745", "#1E86C7", "#EB4E4F"];



}
