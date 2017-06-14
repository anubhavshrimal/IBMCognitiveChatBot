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
import { ChatWindowComponent } from './components/chat-page/chat-window/chat-window.component';
import { RegularUserMsgComponent } from './components/msg-components/user-msgs/regular-user-msg/regular-user-msg.component';
import { ImageLeftUserMsgComponent } from './components/msg-components/user-msgs/image-left-user-msg/image-left-user-msg.component';
import { ImageBottomUserMsgComponent } from './components/msg-components/user-msgs/image-bottom-user-msg/image-bottom-user-msg.component';
import { RegularBotMsgComponent } from './components/msg-components/bot-msgs/regular-bot-msg/regular-bot-msg.component';
import { AlertBotMsgComponent } from './components/msg-components/bot-msgs/alert-bot-msg/alert-bot-msg.component';
import { ActionsBotMsgComponent } from './components/msg-components/bot-msgs/actions-bot-msg/actions-bot-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBannerComponent,
    SignupComponent,
    ChatPageComponent,
    ChatBarComponent,
    SideUserProfileComponent,
    ChatWindowComponent,
    RegularUserMsgComponent,
    ImageLeftUserMsgComponent,
    ImageBottomUserMsgComponent,
    RegularBotMsgComponent,
    AlertBotMsgComponent,
    ActionsBotMsgComponent
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
