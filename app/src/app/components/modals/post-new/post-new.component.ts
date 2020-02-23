import {Component, EventEmitter, OnInit, Output} from '@angular/core';

export const POST_NEW_MODAL = 'POST_NEW_MODAL';

@Component({
  selector: 'post-new-modal',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.scss']
})
export class PostNewModalComponent  {

  description = '';
  title = '';

  @Output() cbClose: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  onSubmit({form: {value: values}}) {

    this.description = values.description;
    this.title = values.title;
  }

}
