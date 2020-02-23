import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {INews} from "../../lists/list-news/list-news.component";
import {IComment} from "../../lists/list-comments/list-comments.component";

@Component({
  selector: 'app-campaign-profile',
  templateUrl: './campaign-profile.component.html',
  styleUrls: ['./campaign-profile.component.scss']
})
export class CampaignProfileComponent implements OnInit {

  id:number = null;

  stars = [1, 2, 3, 4, 5];

  activeStar = 2;

  tabs = ["NEWS", "COMMENTS"];

  currentTab = this.tabs[0];

  news: Array<INews> = [
    {
      title: "My new1",
      about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore molestias numquam optio qui quibusdam quidem similique, sunt? Adipisci deserunt distinctio dolorum id in quibusdam suscipit ullam ut! Architecto corporis esse est magnam nam neque provident quia quos suscipit vel. Amet officiis possimus quia quibusdam sapiente voluptatum? Cumque dicta est voluptates?",
      creationDate: '21.02.2020'
    },
    {
      title: "My new2",
      about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore molestias numquam optio qui quibusdam quidem similique, sunt? Adipisci deserunt distinctio dolorum id in quibusdam suscipit ullam ut! Architecto corporis esse est magnam nam neque provident quia quos suscipit vel. Amet officiis possimus quia quibusdam sapiente voluptatum? Cumque dicta est voluptates?",
      creationDate: '21.02.2020'
    },
    {
      title: "My new3",
      about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore molestias numquam optio qui quibusdam quidem similique, sunt? Adipisci deserunt distinctio dolorum id in quibusdam suscipit ullam ut! Architecto corporis esse est magnam nam neque provident quia quos suscipit vel. Amet officiis possimus quia quibusdam sapiente voluptatum? Cumque dicta est voluptates?",
      creationDate: '21.02.2020'
    }
  ];

  comments: Array<IComment> = [{
    owner: "nikita",
    creationDate: "22.01.2001",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore molestias numquam optio qui quibusdam quidem similique, sunt? Adipisci deserunt distinctio dolorum id in quibusdam suscipit ullam ut! Architecto corporis esse est magnam nam neque provident quia quos suscipit vel. Amet officiis possimus quia quibusdam sapiente voluptatum? Cumque dicta est voluptates?",
    likes: 40
  }];

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  onTabClick({tabName}) {
    this.currentTab = tabName;
  }

  onSelectStar(star) {
    this.activeStar = star;
  }

}
