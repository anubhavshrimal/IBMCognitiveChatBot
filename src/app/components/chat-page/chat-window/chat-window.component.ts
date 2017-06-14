import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  @Input('show-profile') showUserProfile: boolean;
  @Input('avatar-image') avatar: string;
  @ViewChild('scrollElem') private myScrollContainer: ElementRef;

  public msg: string;
  public strings: Array<string>;

  constructor() {
    this.showUserProfile = false;
    this.msg = '';
    this.strings = [];
  }

  ngOnInit() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  add_msg() {
    if (this.msg.trim().length != 0) {
      this.strings.push(this.msg.trim());
      this.msg = '';
      setTimeout(() => { this.scrollToBottom(); });
    }
  }

}
