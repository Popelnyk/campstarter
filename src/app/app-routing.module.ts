import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserProfileComponent} from "./components/pages/user-profile/user-profile.component";
import {MainLayoutComponent} from "./components/pages/main-layout/main-layout.component";
import {CampaignProfileComponent} from "./components/pages/campaign-profile/campaign-profile.component";
import {NotFoundComponent} from "./components/pages/not-found/not-found.component";
import {CampaignsComponent} from "./components/pages/campaigns/campaigns.component";

const routes: Routes = [
  {path: 'users/:id', component: UserProfileComponent},
  {path: '', component: MainLayoutComponent},
  {path: 'campaigns/:id', component: CampaignProfileComponent},
  {path: 'campaigns', component: CampaignsComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
