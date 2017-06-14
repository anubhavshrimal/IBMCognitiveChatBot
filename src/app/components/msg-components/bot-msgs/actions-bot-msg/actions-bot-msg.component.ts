import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'actions-bot-msg',
  templateUrl: './actions-bot-msg.component.html',
  styleUrls: ['./actions-bot-msg.component.css']
})
export class ActionsBotMsgComponent implements OnInit {
  @Input('data') data: string;
  @Input('actions') actions: Array<string>;
  public avatar: string;
  constructor() {
    this.avatar = 'assets/chatbot_icon.jpg'
  }

  ngOnInit() {
  }

}
