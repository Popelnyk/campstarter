import {Component, EventEmitter, Input, Output} from '@angular/core';

export const POST_NEW_MODAL = 'POST_NEW_MODAL';

@Component({
  selector: 'post-new-modal',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.scss']
})
export class PostNewModalComponent  {

  description = '';
  title = '';
  id = '';

  @Output() cbClose: EventEmitter<void> = new EventEmitter<void>();
  @Input() data;

  constructor() { }

  onSubmit({form: {value: values}}) {
    console.log(this.data);
    this.id = this.data.id;
    this.description = values.description;
    this.title = values.title;
  }



}
