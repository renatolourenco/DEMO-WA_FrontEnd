import { Component, ComponentRef, OnInit, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import { ChatDialogLineComponent } from './chat-dialog-line/chat-dialog-line.component';

import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'dc-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.css']
})
export class ChatBodyComponent implements OnInit, AfterViewInit {

  @ViewChild('chatLineComp', { read: ViewContainerRef, static: true })
  public chatLineComp;

  private lineToDestroy: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private dataService: DataService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.dataService.message.subscribe(msgObj => {
      this.dataProcess(msgObj);
    })
  }

  private dataProcess(msgObject: Object) {

    let dialogObjType: String;

    if (msgObject['bot']) {
      dialogObjType = 'bot';
    } else {
      dialogObjType = 'user';
    }

    if (dialogObjType === 'user') {
      this.createLine(msgObject, dialogObjType, false, false);
    } else {
      let delayTime = 0;
      let delayTime2 = 1000;

      msgObject['bot'].forEach((objValue) => {
        if (this.dataService.messageCookieOrigin) {
          if (this.lineToDestroy) {
            this.lineToDestroy.destroy();
          }
          if (objValue['response_type'] && objValue['response_type'] === 'text') {
            this.createLine(objValue, dialogObjType, true, false);
          } else if (objValue['response_type'] && (
            objValue['response_type'] === 'image' ||
            objValue['response_type'] === 'option')
          ) {
            this.createLine(objValue, dialogObjType, false, false);
          }
        } else {
          setTimeout(() => {
            if (this.lineToDestroy) {
              this.lineToDestroy.destroy();
            }
            this.createLine({}, dialogObjType, true, true);
            setTimeout(() => {
              if (this.lineToDestroy) {
                this.lineToDestroy.destroy();
              }
              if (objValue['response_type'] && objValue['response_type'] === 'text') {
                this.createLine(objValue, dialogObjType, true, false);
              } else if (objValue['response_type'] && (
                objValue['response_type'] === 'image' ||
                objValue['response_type'] === 'option')
              ) {
                this.createLine(objValue, dialogObjType, false, false);
              }
            }, delayTime2);
            delayTime2 += 1000;
          }, delayTime);
        }
        delayTime += 1500;
      });
    }
  }

  private createLine(msgObj: Object, objType: String, showAvatar: Boolean, loading: Boolean): ChatDialogLineComponent {
    const factory = this.componentFactoryResolver.resolveComponentFactory(ChatDialogLineComponent);
    const ref: ComponentRef<ChatDialogLineComponent> = this.chatLineComp.createComponent(factory);
    ref.instance.setDialogObject(msgObj)
    ref.instance.setDialogObjType(objType);
    ref.instance.setShowAvatarFlag(showAvatar);
    ref.instance.setLoadingBalloon(loading);
    ref.changeDetectorRef.detectChanges();
    this.dataService.setUpdateScroll();
    if (loading) {
      this.lineToDestroy = ref;
    }
    return ref.instance;
  }

}
