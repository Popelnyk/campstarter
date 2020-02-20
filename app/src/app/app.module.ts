import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user.service';

import {FormsModule} from "@angular/forms";
import { AuthModalComponent } from './components/modals/auth-modal.component';
import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from './ui/Modal/modal.component';
import {NavigationBarComponent} from "./components/navigationBar/navigation-bar.component";
import {SvgSearchComponent} from "./icons/Search/search.component";


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    AuthModalComponent,
    NavigationBarComponent,
    SvgSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
