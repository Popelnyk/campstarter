import {Component, EventEmitter, Input, Output} from '@angular/core';

export const DONATE_MODAL = 'DONATE_MODAL';

@Component({
  selector: 'donate-modal',
  templateUrl: './donate-modal.component.html',
  styleUrls: ['./donate-modal.component.scss']
})
export class DonateModalComponent {

  amount:number;
  id: number | string;

  @Output() cbClose: EventEmitter<void> = new EventEmitter<void>();
  @Input() data;

  onSubmit({form: {value: values}}) {
    this.amount = values.amount;
    this.id = this.data.id;
  }

}
