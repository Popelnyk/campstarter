import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit{

  public listOfCampaigns: [] = [];

  public user: any;

  @Output() openAuthModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() openRegistrationModal: EventEmitter<void> = new EventEmitter<void>();

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.user = {
      username: 'remmidemmi',
      password: 'fgmglfkf'
    };
  }

  login() {
    this.openAuthModal.emit();
    // this.userService.login({'username': this.user.username, 'password': this.user.password});
  }

  logout() {
    this.userService.logout();
  }

  join() {
    this.openRegistrationModal.emit();
  }
}
