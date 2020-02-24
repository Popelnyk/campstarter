import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

interface IList {
  id: string | number;
  title: string | number;
}

@Component({
  selector: 'search-dropdown',
  templateUrl: './search-dropdown.component.html',
  styleUrls: ['./search-dropdown.component.scss']
})
export class SearchDropdownComponent implements OnChanges{

  @Input() searchValue:string;
  @Output() onChoose: EventEmitter<void> = new EventEmitter<void>();

  list: Array<any> = [];

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['searchValue'].isFirstChange()) return;

    // Здесь выполнять запрос

    //В лист записать элементы поиска
    //this.list = [];


  }

  onChooseCampaign() {
    this.onChoose.emit();
  }

}
