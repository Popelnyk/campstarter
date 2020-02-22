import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserProfileComponent} from "./components/pages/user-profile/user-profile.component";

const routes: Routes = [
  {path: 'user/:id', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
