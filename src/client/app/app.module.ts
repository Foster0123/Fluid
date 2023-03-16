import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { AccountModule } from './account/account.module';

import { AppComponent } from './app.component';
import { AccountContainerComponent } from './account/account-container/account-container.component';
import { ChatComponent } from './components/chat/chat.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ChatSectionComponent } from './components/chat-section/chat-section.component';
import { ChatSidebarComponent } from './components/chat-sidebar/chat-sidebar.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "account", component: AccountContainerComponent },
  { path: "chat", component: ChatComponent },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  { path: "chat-section", component: ChatSectionComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    ChatSectionComponent,
    ChatSidebarComponent
  ],
  imports: [
    AccountModule,
    SharedModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    NgbModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }