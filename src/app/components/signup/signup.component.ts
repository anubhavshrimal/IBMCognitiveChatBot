import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public selectedAvatar: string;
  public avatars: Array<object>;
  public firstName: string;
  public lastName: string;
  
  constructor() {
    // selected avatar icon value
    this.selectedAvatar = '';
    this.firstName = '';
    this.lastName = '';

    // array of avatar icons for ngFor in html
    this.avatars = [
      {
        'src': "assets/man-avatar.jpg",
        'name': "man"
      },
      {
        'src': "assets/lady-avatar.jpg",
        'name': "lady"
      },
      {
        'src': "assets/plus-avatar.jpg",
        'name': "other"
      }
    ];
  }

  ngOnInit() {
  }

  // apply highlight classes on the basis of selected avatar value
  selectAvatar(avatar: string) {
    // if same avatar was clicked again -> unselect the avatar
    if (this.selectedAvatar == avatar) {
      this.selectedAvatar = '';
    }
    else if (avatar == 'man') {
      this.selectedAvatar = 'man';
    }
    else if (avatar == 'lady') {
      this.selectedAvatar = 'lady';
    }
    else {
      this.selectedAvatar = 'other';
    }
  }
}
