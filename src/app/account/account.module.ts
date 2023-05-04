// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

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

const accountRoutes: Routes = [
  { path: "", component: ProfileComponent },
  { path: "change-password", component: ChangePasswordComponent },
  { path: "notifications", component: NotificationComponent },
  { path: "activity", component: ActivityComponent },
  { path: "security", component: SecurityComponent },
  { path: "danger", component: DangerComponent }
]

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
    RouterModule.forChild(accountRoutes)
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