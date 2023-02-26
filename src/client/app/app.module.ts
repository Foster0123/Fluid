import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatSectionComponent } from './components/chat-section/chat-section.component';
import { ChatSidebarComponent } from './components/chat-sidebar/chat-sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const appRoutes: Routes = [
  {path: "", component:HomeComponent},
  {path: "chat", component: ChatComponent},
  {path: "account", component: AccountComponent},
  {path: "signin", component: SigninComponent},
  {path: "signup", component: SignupComponent},
  {path: "chat-section", component: ChatSectionComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    AccountComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    ChatSectionComponent,
    ChatSidebarComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    NgbModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
