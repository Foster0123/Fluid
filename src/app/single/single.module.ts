//  Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom Modules
import { SharedModule } from '../shared/shared.module';

// Custom Components
import { HomeComponent } from './home/home.component'; // Home Component
import { SigninComponent } from './signin/signin.component'; // Signin Component
import { SignupComponent } from './signup/signup.component'; // Signup Component
import { NotfoundComponent } from './notfound/notfound.component'; // NotFound aka 404 Component

@NgModule({
  declarations: [HomeComponent, SigninComponent, SignupComponent, NotfoundComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ HomeComponent, SigninComponent, SignupComponent ]
})
export class SingleModule { }
