import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {
  public showUserProfile: boolean;
  @Output() onSwitchUserPane = new EventEmitter<boolean>();

  constructor() {
    this.showUserProfile = false;
  }

  ngOnInit() {
  }

  userProfile() {
    this.showUserProfile = !this.showUserProfile;
    this.onSwitchUserPane.emit(this.showUserProfile);
  }

}
