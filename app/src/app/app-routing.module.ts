import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserProfileComponent} from "./components/pages/user-profile/user-profile.component";
import {MainLayoutComponent} from "./components/pages/main-layout/main-layout.component";
import {CampaignProfileComponent} from "./components/pages/campaign-profile/campaign-profile.component";

const routes: Routes = [
  {path: 'users/:id', component: UserProfileComponent},
  {path: '', component: MainLayoutComponent},
  {path: 'campaigns/:id', component: CampaignProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
