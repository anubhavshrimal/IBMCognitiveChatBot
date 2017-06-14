import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'regular-user-msg',
  templateUrl: './regular-user-msg.component.html',
  styleUrls: ['./regular-user-msg.component.css']
})
export class RegularUserMsgComponent implements OnInit {
  @Input('data') data: string;
  @Input('avatar-image') avatar: string;
  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }

}
