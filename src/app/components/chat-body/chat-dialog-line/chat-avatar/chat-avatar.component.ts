import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-chat-avatar',
  templateUrl: './chat-avatar.component.html',
  styleUrls: ['./chat-avatar.component.css']
})
export class ChatAvatarComponent implements OnInit {

  public avatarPath: String;
  public show: Boolean;
  public type: String;

  constructor() { }

  ngOnInit() { }

  public setAvatarType(typeAvatar: String) {
    this.type = `dc_chat_dialog_avatar-avatar_${typeAvatar}`;
    this.avatarPath = `../../../../../assets/img/${typeAvatar}_avatar.png`
  }

  public setShowAvatar(show) {
    this.show = show;
  }

}
