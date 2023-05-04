// Core Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Custom Modules
import { SharedModule } from './shared/shared.module';
import { ChatModule } from './chat/chat.module';
import { SingleModule } from './single/single.module';
import { AccountModule } from './account/account.module';

// Custom Components

//  --> Root Component
import { AppComponent } from './app.component'; 

//  --> Account Components
import { AccountComponent } from './account/account.component'; // Account Component
import { ProfileComponent } from './account/profile/profile.component'; // Profile Component
import { ChangePasswordComponent } from './account/change-password/change-password.component'; // Change Password Component
import { NotificationComponent } from './account/notification/notification.component'; // Notification Component
import { ActivityComponent } from './account/activity/activity.component'; // Activity Component
import { SecurityComponent } from './account/security/security.component'; // Security Component
import { DangerComponent } from './account/danger/danger.component'; // Danger Component

//  --> Chat Components
import { ChatComponent } from './chat/chat.component';

//  --> Single Components
import { HomeComponent } from './single/home/home.component'; // Home Component
import { SigninComponent } from './single/signin/signin.component'; // Signin Component
import { SignupComponent } from './single/signup/signup.component'; // Signup Component
import { NotfoundComponent } from './single/notfound/notfound.component'; // NotFound Component

//  --> Application Routes
const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "chat", component: ChatComponent },
  { 
    path: "account", 
    component: AccountComponent,
    children: [
      { path: "", component: ProfileComponent },
      { path: "change-password", component: ChangePasswordComponent },
      { path: "notifications", component: NotificationComponent },
      { path: "activity", component: ActivityComponent },
      { path: "security", component: SecurityComponent },
      { path: "danger", component: DangerComponent }
    ]
  },
  { path: "login", component: SigninComponent },
  { path: "register", component: SignupComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AccountModule,
    ChatModule,
    SharedModule,
    SingleModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  exports: [
    RouterModule,
    SingleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }