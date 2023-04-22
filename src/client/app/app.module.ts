import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ChatModule } from './chat/chat.module';
import { AccountModule } from './account/account.module';

import { AppComponent } from './app.component';
import { AccountContainerComponent } from './account/account-container/account-container.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ChatContainerComponent } from './chat/chat-container/chat-container.component';

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "account", component: AccountContainerComponent },
  { path: "chat", component: ChatContainerComponent },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    AccountModule,
    ChatModule,
    SharedModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }