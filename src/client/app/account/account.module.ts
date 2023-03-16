import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module'; 

import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';

import { NavbarComponent } from '../shared/navbar/navbar.component';
import { AccountSidebarComponent } from './account-sidebar/account-sidebar.component';
import { AccountContainerComponent } from './account-container/account-container.component';


const accountRoutes : Routes = [
  { path: "", component: AccountContainerComponent },
  { path: "profile", component: ProfileComponent },
  { path: "notification", component: NotificationComponent },
]

@NgModule({
  declarations: [
    ProfileComponent,
    NotificationComponent,
    AccountSidebarComponent,
    AccountContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(accountRoutes)
  ],
  exports: [
    AccountContainerComponent,
    NavbarComponent
  ]
})
export class AccountModule { }