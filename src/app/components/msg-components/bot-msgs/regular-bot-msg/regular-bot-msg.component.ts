import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'regular-bot-msg',
  templateUrl: './regular-bot-msg.component.html',
  styleUrls: ['./regular-bot-msg.component.css']
})
export class RegularBotMsgComponent implements OnInit {
  @Input('data') data: string;
  public avatar: string;
  constructor() {
    this.avatar = 'assets/chatbot_icon.jpg'
   }

  ngOnInit() {
  }

}
