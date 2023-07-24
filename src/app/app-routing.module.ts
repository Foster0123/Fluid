import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//  --> Account Components
import { AccountComponent } from './account/account.component'; // Account Component
import { ProfileComponent } from './account/profile/profile.component'; // Profile Component
import { ChangePasswordComponent } from './account/change-password/change-password.component'; // Change Password Component
import { NotificationComponent } from './account/notification/notification.component'; // Notification Component
import { ActivityComponent } from './account/activity/activity.component'; // Activity Component
import { SecurityComponent } from './account/security/security.component'; // Security Component
import { DangerComponent } from './account/danger/danger.component'; // Danger Component
import { DevicesComponent } from './account/devices/devices.component'; // Devices Component

//  --> Chat Components
import { ChatComponent } from './chat/chat.component';

//  --> Single Components
import { HomeComponent } from './single/home/home.component'; // Home Component
import { SigninComponent } from './single/signin/signin.component'; // Signin Component
import { SignupComponent } from './single/signup/signup.component'; // Signup Component
import { NotfoundComponent } from './single/notfound/notfound.component'; // NotFound Component

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "chat", component: ChatComponent },
  { path: "login", component: SigninComponent },
  { path: "register", component: SignupComponent },
  { 
    path: "account", 
    component: AccountComponent,
    children: [
      { path: "", component: ProfileComponent },
      { path: "change-password", component: ChangePasswordComponent },
      { path: "notifications", component: NotificationComponent },
      { path: "activity", component: ActivityComponent },
      { path: "security", component: SecurityComponent },
      { path: "danger", component: DangerComponent },
      { path: "devices", component: DevicesComponent },
    ]
  },
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}