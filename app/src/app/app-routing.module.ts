import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserProfileComponent} from "./components/pages/user-profile/user-profile.component";
import {MainLayoutComponent} from "./components/pages/main-layout/main-layout.component";

const routes: Routes = [
  {path: 'user/:id', component: UserProfileComponent},
  {path: '', component: MainLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
