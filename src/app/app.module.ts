import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { SideBannerComponent } from './components/side-banner/side-banner.component';
import { SignupComponent } from './components/signup/signup.component';
import { ChatBarComponent } from './components/chat-page/chat-bar/chat-bar.component';
import { SideUserProfileComponent } from './components/side-user-profile/side-user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBannerComponent,
    SignupComponent,
    ChatPageComponent,
    ChatBarComponent,
    SideUserProfileComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
