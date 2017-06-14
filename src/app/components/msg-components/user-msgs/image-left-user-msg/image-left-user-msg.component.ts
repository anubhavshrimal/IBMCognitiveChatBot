import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image-left-user-msg',
  templateUrl: './image-left-user-msg.component.html',
  styleUrls: ['./image-left-user-msg.component.css']
})
export class ImageLeftUserMsgComponent implements OnInit {
  @Input('data') data: string;
  @Input('avatar') avatar: string;
  @Input('resource') resource: string;
  
  constructor() { }

  ngOnInit() {
  }

}
