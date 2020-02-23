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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatSliderModule} from "@angular/material/slider";
import {ModalsService} from "./services/modals.service";


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
    CreateCampaignModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [UserService, CampaignsService, ModalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
