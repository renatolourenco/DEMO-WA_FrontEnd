import { Component, ComponentRef, OnInit, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import { ChatAvatarComponent } from './chat-avatar/chat-avatar.component';
import { ImageBalloonComponent } from './image-balloon/image-balloon.component';
import { OptionsBalloonComponent } from './options-balloon/options-balloon.component';
import { TextBalloonComponent } from './text-balloon/text-balloon.component';
import { TypingBalloonComponent } from './typing-balloon/typing-balloon.component';

import { DataService } from 'src/app/services/data/data.service';


@Component({
  selector: 'dc-chat-dialog-line',
  templateUrl: './chat-dialog-line.component.html',
  styleUrls: ['./chat-dialog-line.component.css']
})
export class ChatDialogLineComponent implements OnInit, AfterViewInit {

  @ViewChild('avatarComp', { read: ViewContainerRef, static: true })
  public avatarComp;

  @ViewChild('balloonComp', { read: ViewContainerRef, static: true })
  public balloonComp;

  private dialogObj: Object;
  private dialogObjType: String;
  private showAvatar: Boolean;
  private showLoadingBalloon: Boolean;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private dataService: DataService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    if (this.dialogObjType === 'user') {
      this.dataService.destroyComp();
      this.createAvatar(this.dialogObjType, this.showAvatar);
      this.createTextBalloon(this.dialogObjType, this.dialogObj[`${this.dialogObjType}`], this.showAvatar);
    } else {
      this.dataService.destroyAvatar();
      this.createAvatar("bot", this.showAvatar);

      if (!this.showLoadingBalloon) {
        if (this.dialogObj['response_type'] === 'text') {
          this.createTextBalloon(this.dialogObjType, this.dialogObj['text'], true);
        }
        if (this.dialogObj['response_type'] === 'option') {
          this.createOptionsBalloon(this.dialogObj['options']);
        }
        if (this.dialogObj['response_type'] === 'image') {
          this.createImageBalloon(this.dialogObj);
        }
      } else {
        this.dataService.destroyAvatar();
        this.createAvatar("bot", this.showAvatar);
        this.createTypingBalloon();
      }

    }
  }

  private createAvatar(avatarType: String, showAvatar: Boolean): ChatAvatarComponent {
    const factory = this.componentFactoryResolver.resolveComponentFactory(ChatAvatarComponent);
    const ref: ComponentRef<ChatAvatarComponent> = this.avatarComp.createComponent(factory);
    ref.instance.setAvatarType(avatarType);
    ref.instance.setShowAvatar(showAvatar);
    this.dataService.setAvatarToDestroy(ref);
    ref.changeDetectorRef.detectChanges();
    return ref.instance;
  }

  private createImageBalloon(imgObj: Object): ImageBalloonComponent {
    const factory = this.componentFactoryResolver.resolveComponentFactory(ImageBalloonComponent);
    const ref: ComponentRef<ImageBalloonComponent> = this.balloonComp.createComponent(factory);
    ref.instance.setImageData(imgObj);
    ref.changeDetectorRef.detectChanges();
    return ref.instance;
  }

  private createOptionsBalloon(options: Object): OptionsBalloonComponent {
    const factory = this.componentFactoryResolver.resolveComponentFactory(OptionsBalloonComponent);
    const ref: ComponentRef<OptionsBalloonComponent> = this.balloonComp.createComponent(factory);
    ref.instance.setOptionsList(options);
    ref.changeDetectorRef.detectChanges();
    this.dataService.setCompToDestroy(ref);
    return ref.instance;
  }

  private createTextBalloon(ballonType: String, txtMsg: String, margin: Boolean): TextBalloonComponent {
    const factory = this.componentFactoryResolver.resolveComponentFactory(TextBalloonComponent);
    const ref: ComponentRef<TextBalloonComponent> = this.balloonComp.createComponent(factory);
    ref.instance.setBalloonType(ballonType);
    ref.instance.setMargin(margin);
    ref.instance.setTxtMessage(txtMsg);
    ref.changeDetectorRef.detectChanges();
    return ref.instance;
  }

  private createTypingBalloon(): TypingBalloonComponent {
    const factory = this.componentFactoryResolver.resolveComponentFactory(TypingBalloonComponent);
    const ref: ComponentRef<TypingBalloonComponent> = this.balloonComp.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
    return ref.instance;
  }

  public setDialogObject(dialog: Object) {
    this.dialogObj = dialog;
  }

  public setDialogObjType(type: String) {
    this.dialogObjType = type;
  }

  public setLoadingBalloon(loadingFlag) {
    this.showLoadingBalloon = loadingFlag;
  }

  public setShowAvatarFlag(show: Boolean) {
    this.showAvatar = show;
  }

}
