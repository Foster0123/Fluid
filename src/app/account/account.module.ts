// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Custom Module
import { SharedModule } from '../shared/shared.module'; 

// Custom Account Components
import { AccountComponent } from './account.component';
import { AccountSidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NotificationComponent } from './notification/notification.component';
import { ActivityComponent } from './activity/activity.component';
import { SecurityComponent } from './security/security.component';
import { DangerComponent } from './danger/danger.component';

@NgModule({
  declarations: [
    AccountComponent,
    ProfileComponent,
    NotificationComponent,
    AccountSidebarComponent,
    ChangePasswordComponent,
    DangerComponent,
    ActivityComponent,
    SecurityComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],

  exports: [
    AccountComponent,
    ProfileComponent,
    NotificationComponent,
    AccountSidebarComponent,
    ChangePasswordComponent,
    DangerComponent,
    ActivityComponent,
    SecurityComponent,
    RouterModule
  ]
})

export class AccountModule {}