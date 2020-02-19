import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() classNames;
  @Input() isOpen;
  ngOnInit(): void {
    document.body.style.overflow = "hidden";
  }

}
