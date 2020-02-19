import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  public listOfCampaigns:any;

  public user: any;
 
  isOpen = false;

  constructor(public userService: UserService) { }
 
  ngOnInit() {
    this.user = {
      username: 'remmidemmi',
      password: 'fgmglfkf'
    };
  }
 
  login() {
    this.isOpen = true
    //this.userService.login({'username': this.user.username, 'password': this.user.password});
  }
 
  logout() {
    this.userService.logout();
  }

  close() {
    this.isOpen = false;
  }

}
