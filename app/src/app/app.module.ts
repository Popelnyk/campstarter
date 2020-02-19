import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ModalComponent} from "./ui/Modal/modal.component";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthModalComponent} from "./components/modals/auth-modal.component";

import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    AuthModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
