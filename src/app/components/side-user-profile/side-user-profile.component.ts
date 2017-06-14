import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'side-user-profile',
  templateUrl: './side-user-profile.component.html',
  styleUrls: ['./side-user-profile.component.css']
})
export class SideUserProfileComponent implements OnInit {
  @Input('user-data') user: Object;
  constructor() { }

  ngOnInit() {
  }

}
