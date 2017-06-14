import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {
  public showUserProfile: boolean;
  public user: Object;

  constructor() {
    this.showUserProfile = false;
    this.user = {
      firstName: 'Jackblack',
      lastName: 'Longnamous',
      email: 'jackblack@company.com',
      profilePicture: 'assets/man-avatar.jpg',
      number: '123-244-2446',
      address: {
        line1: '1060 Capp St',
        state: 'San Francisco, CA',
        country: 'USA',
        pin: '94110'
      },
      payment: 'VISA *2446'
    }
  }

  ngOnInit() {
  }

  onSwitchUserPane(showUserProfile: boolean) {
    this.showUserProfile = showUserProfile;
  }
}
