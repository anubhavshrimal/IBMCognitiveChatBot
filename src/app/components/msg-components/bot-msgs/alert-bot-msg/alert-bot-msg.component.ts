import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alert-bot-msg',
  templateUrl: './alert-bot-msg.component.html',
  styleUrls: ['./alert-bot-msg.component.css']
})
export class AlertBotMsgComponent implements OnInit {
  @Input('data') data: string;
  @Input('alert') alert: string;
  public avatar: string;
  constructor() {
    this.avatar = 'assets/chatbot_icon.jpg'
  }

  ngOnInit() {
  }

}
