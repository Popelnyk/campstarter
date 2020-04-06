import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent{

  public user: any;

  @Output() openAuthModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() openRegistrationModal: EventEmitter<void> = new EventEmitter<void>();

  constructor(public userService: UserService, public router: Router) { }

  searchValue: string;


  onChangeSearch(value) {
    this.searchValue = value;
  }


  login() {
    this.openAuthModal.emit();
    // this.userService.login({'username': this.user.username, 'password': this.user.password});
  }

  async logout() {
    await this.userService.logout();
    await this.router.navigate(['/']);
  }

  join() {
    this.openRegistrationModal.emit();
  }

  onChoose() {
    this.searchValue = '';
  }

}
