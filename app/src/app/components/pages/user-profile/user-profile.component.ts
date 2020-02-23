import {Component, OnInit} from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {ModalsService} from "../../../services/modals.service";

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{

  id = "null";

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute, public modalsService: ModalsService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

}
