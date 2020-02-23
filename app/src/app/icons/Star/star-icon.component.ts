import {Component, Input} from '@angular/core';

@Component({
  selector: 'svg-star',
  templateUrl: './star-icon.component.html',
  styleUrls: ['./star-icon.component.scss']
})
export class StarIconComponent {

  @Input() width: number;
  @Input() height: number;
  @Input() active: boolean;


  constructor() {
    this.width = 24;
    this.height = 24;
  }

}
