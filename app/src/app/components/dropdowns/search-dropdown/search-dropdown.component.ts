import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {HttpClient} from "@angular/common/http";

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

  list:any;

  constructor(private http:HttpClient) {}

  async ngOnChanges(changes: SimpleChanges) {
    if(changes['searchValue'].isFirstChange()) return;

    await this.http.get(`http://127.0.0.1:8000/campaigns/?search=${changes['searchValue']['currentValue']}`).subscribe(
      data => this.list = data,
      error => console.log(error)
    )
  }

  onChooseCampaign() {
    this.onChoose.emit();
  }

}
