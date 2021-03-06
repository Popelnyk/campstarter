import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';

import {FormBuilder, FormsModule} from "@angular/forms";
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
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { DonateModalComponent } from './components/modals/donate-modal/donate-modal.component';
import { SearchDropdownComponent } from './components/dropdowns/search-dropdown/search-dropdown.component';
import { TagsViewComponent } from './components/tags/tags-view/tags-view.component';
import { CampaignsComponent } from './components/pages/campaigns/campaigns.component';
import { EditUserProfileModalComponent } from "./components/modals/edit-user-profile-modal/edit-user-profile-modal.component";
import { DragDropDirective} from "./directives/drag-drop.directive";
import { UploadFileComponent} from "./upload-file/upload-file.component";


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
    NotFoundComponent,
    DonateModalComponent,
    SearchDropdownComponent,
    TagsViewComponent,
    CampaignsComponent,
    EditUserProfileModalComponent,
    DragDropDirective,
    UploadFileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserService, CampaignsService, ModalsService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
