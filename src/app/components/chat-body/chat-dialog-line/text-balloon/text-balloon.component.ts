import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'dc-text-balloon',
  templateUrl: './text-balloon.component.html',
  styleUrls: ['./text-balloon.component.css']
})
export class TextBalloonComponent implements OnInit {

  public marginType: String;
  public type: String;
  public txtMsg: String;

  constructor() { }

  ngOnInit() { }

  public setBalloonType(balloonType: String) {
    this.type = `dc_chat_dialog_ballon-ballon_${balloonType}`;
  }

  public setTxtMessage(text: String) {
    this.txtMsg = text;
  }

  public setMargin(margin: Boolean) {
    if (margin) {
      this.marginType = `${this.type}-withAvatarMargin`;
    }
  }

}
