import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SideBannerComponent } from './components/side-banner/side-banner.component';
import { SignupComponent } from './components/signup/signup.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBannerComponent,
    SignupComponent,
    ChatPageComponent
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
