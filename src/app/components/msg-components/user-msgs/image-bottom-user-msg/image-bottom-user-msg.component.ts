import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image-bottom-user-msg',
  templateUrl: './image-bottom-user-msg.component.html',
  styleUrls: ['./image-bottom-user-msg.component.css']
})
export class ImageBottomUserMsgComponent implements OnInit {
  @Input('data') msg: string;
  @Input('avatar-image') avatar: string;

  constructor() { }

  ngOnInit() {
  }

}
