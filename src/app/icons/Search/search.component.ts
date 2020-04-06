import { Component, Input } from "@angular/core";

@Component({
  selector: "svg-search",
  templateUrl: './search.component.html',
  styleUrls: ['search.component.scss']
})
export class SvgSearchComponent {
  @Input() width: number;
  @Input() height: number;

  constructor() {
    this.width = 24;
    this.height = 24;
  }


}
