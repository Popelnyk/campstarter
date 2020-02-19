import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  isOpen = false;

  open() {
    this.isOpen = true;
  }


  close() {
    this.isOpen = false;
  }
}
