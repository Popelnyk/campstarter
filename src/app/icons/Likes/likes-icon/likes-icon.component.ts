import {Component, Input} from '@angular/core';

@Component({
  selector: 'svg-likes',
  templateUrl: './likes-icon.component.html',
  styleUrls: ['./likes-icon.component.scss']
})
export class LikesIconComponent {

  @Input() width: number;
  @Input() height: number;

  constructor() {
    this.width = 24;
    this.height = 24;
  }

}
