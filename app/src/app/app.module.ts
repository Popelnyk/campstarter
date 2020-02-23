import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';

import {FormsModule} from "@angular/forms";
import { AuthModalComponent } from './components/modals/auth-modal/auth-modal.component';
import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from './ui/Modal/modal.component';
import {NavigationBarComponent} from "./components/navigationBar/navigation-bar.component";
import {SvgSearchComponent} from "./icons/Search/search.component";
import {RegistrationModalComponent} from "./components/modals/registration-modal/registration-modal.component";
import {UserProfileComponent} from "./components/pages/user-profile/user-profile.component";
import {MainLayoutComponent} from "./components/pages/main-layout/main-layout.component";
import {CampaignsService} from "./services/campaigns.service";
import {ButtonDirective} from "./directives/button.directive";
import { CreateCampaignModalComponent } from './components/modals/create-campaign-modal/create-campaign-modal.component';
import {ModalsService} from "./services/modals.service";
import { CampaignProfileComponent } from './components/pages/campaign-profile/campaign-profile.component';
import { ListNewsComponent } from './components/lists/list-news/list-news.component';
import { ListCommentsComponent } from './components/lists/list-comments/list-comments.component';
import { LikesIconComponent } from './icons/Likes/likes-icon/likes-icon.component';
import { StarIconComponent } from './icons/Star/star-icon.component';
import { PostNewModalComponent } from './components/modals/post-new/post-new.component';



@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    AuthModalComponent,
    NavigationBarComponent,
    SvgSearchComponent,
    RegistrationModalComponent,
    UserProfileComponent,
    MainLayoutComponent,
    ButtonDirective,
    CreateCampaignModalComponent,
    CampaignProfileComponent,
    ListNewsComponent,
    ListCommentsComponent,
    LikesIconComponent,
    StarIconComponent,
    PostNewModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserService, CampaignsService, ModalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
