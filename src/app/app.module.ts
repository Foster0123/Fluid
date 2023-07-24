// Core Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Custom Modules
import { SharedModule } from './shared/shared.module';
import { ChatModule } from './chat/chat.module';
import { SingleModule } from './single/single.module';
import { AccountModule } from './account/account.module';
import { AppRoutingModule } from './app-routing.module';

//  --> Root Component
import { AppComponent } from './app.component'; 

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
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}