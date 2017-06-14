import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public avatars: Array<object>;
  public firstName: string;
  public lastName: string;

  constructor() {
    this.firstName = '';
    this.lastName = '';

    // array of avatar icons for ngFor in html
    this.avatars = [
      {
        'src': "assets/man-avatar.jpg"
      },
      {
        'src': "assets/lady-avatar.jpg"
      },
      {
        'src': "assets/plus-avatar.jpg"
      }
    ];
  }

  ngOnInit() {
  }
}
