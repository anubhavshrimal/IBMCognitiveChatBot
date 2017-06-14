import { Component, OnInit, Input, ElementRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AddMsgsDirective } from '../../../add-msgs.directive';

import { ImageBottomUserMsgComponent } from '../../msg-components/user-msgs/image-bottom-user-msg/image-bottom-user-msg.component';
import { ImageLeftUserMsgComponent } from '../../msg-components/user-msgs/image-left-user-msg/image-left-user-msg.component';
import { RegularUserMsgComponent } from '../../msg-components/user-msgs/regular-user-msg/regular-user-msg.component';
import { RegularBotMsgComponent } from '../../msg-components/bot-msgs/regular-bot-msg/regular-bot-msg.component';
import { ActionsBotMsgComponent } from '../../msg-components/bot-msgs/actions-bot-msg/actions-bot-msg.component';
import { AlertBotMsgComponent } from '../../msg-components/bot-msgs/alert-bot-msg/alert-bot-msg.component';

import { AddMsgsComponent } from '../../addMsgs.component';
@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  @Input('show-profile') showUserProfile: boolean;
  @Input('avatar-image') avatar: string;
  @ViewChild('scrollElem') private myScrollContainer: ElementRef;
  @ViewChild(AddMsgsDirective) adHost: AddMsgsDirective;

  public msg: string;
  public alert: string;
  public actions: Array<string>;

  // User Message Components array
  public userComponents = [
    ImageBottomUserMsgComponent,
    ImageLeftUserMsgComponent,
    RegularUserMsgComponent
  ];
  
  // Bot Message Components array
  public botComponents = [
    RegularBotMsgComponent,
    ActionsBotMsgComponent,
    AlertBotMsgComponent
  ];

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) {
    // for setting offset if user profile is shown
    this.showUserProfile = false;
    this.msg = '';

    // If single action is in the array then component will work as a single action component
    // dummy actions
    this.actions = [
      'Lorem ipsum',
      'dolor sit amet',
      'consectetur elit'
    ];
    
    // dummy alert
    this.alert = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
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

      // Call to add a component randomly
      this.loadComponent(this.msg.trim());
      this.msg = '';
      setTimeout(() => { this.scrollToBottom(); });
    }
  }

  // Function to load component randomly
  loadComponent(msg: string) {
    // generate random indexes for components
    let randomUserComponentIndx = Math.floor(Math.random() * 3);
    let randomBotComponentIndx = Math.floor(Math.random() * 3);

    // get the component object from respective arrays
    let user_msg_view = this.userComponents[randomUserComponentIndx];
    let bot_msg_view = this.botComponents[randomBotComponentIndx];

    // generate the factories for user and bot msg
    let userFactory = this._componentFactoryResolver.resolveComponentFactory(user_msg_view);
    let botFactory = this._componentFactoryResolver.resolveComponentFactory(bot_msg_view);

    let viewContainerRef = this.adHost.viewContainerRef;

    // add user component to the view container
    let userComponentRef = viewContainerRef.createComponent(userFactory);

    // Add user typed message and profile picture
    (<AddMsgsComponent>userComponentRef.instance).data = this.msg;
    (<AddMsgsComponent>userComponentRef.instance).avatar = this.avatar;

    // If ImageLeftUserMsgComponent is selected randomly, add dummy small image
    if(user_msg_view == ImageLeftUserMsgComponent){
      (<AddMsgsComponent>userComponentRef.instance).resource = "assets/small-square-image.png";
    }
    // If ImageBottomUserMsgComponent is selected randomly, add dummy large image
    else if (user_msg_view == ImageBottomUserMsgComponent){
      (<AddMsgsComponent>userComponentRef.instance).resource = "assets/big-pizza-image.jpg";
    }

    // add bot component to the view container
    let botComponentRef = viewContainerRef.createComponent(botFactory);
    (<AddMsgsComponent>botComponentRef.instance).data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    // If ActionsBotMsgComponent is selected randomly, add dummy actions 
    if(bot_msg_view == ActionsBotMsgComponent){
      (<AddMsgsComponent>botComponentRef.instance).actions = this.actions;
    }
    // If AlertBotMsgComponent is selected randomly, add dummy alert 
    else if (bot_msg_view == AlertBotMsgComponent){
      (<AddMsgsComponent>botComponentRef.instance).alert = this.alert;
    }
  }

}
