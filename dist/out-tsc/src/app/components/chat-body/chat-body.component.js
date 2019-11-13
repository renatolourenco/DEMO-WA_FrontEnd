import * as tslib_1 from "tslib";
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ChatDialogLineComponent } from './chat-dialog-line/chat-dialog-line.component';
let ChatBodyComponent = class ChatBodyComponent {
    constructor(componentFactoryResolver, dataService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.dataService = dataService;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.dataService.message.subscribe(msgObj => {
            this.dataProcess(msgObj);
        });
    }
    dataProcess(msgObject) {
        let dialogObjType;
        if (msgObject['bot']) {
            dialogObjType = 'bot';
        }
        else {
            dialogObjType = 'user';
        }
        if (dialogObjType === 'user') {
            this.createLine(msgObject, dialogObjType, true);
        }
        else {
            let countBallons = msgObject['bot'].reduce((acc, cur) => cur['response_type'] === 'text' ? ++acc : acc, 0);
            countBallons += msgObject['bot'].reduce((acc, cur) => cur['response_type'] === 'image' ? ++acc : acc, 0);
            msgObject['bot'].forEach((objValue, idx) => {
                if (objValue['response_type'] && objValue['response_type'] === 'text') {
                    if (idx === countBallons - 1) {
                        this.createLine(objValue, dialogObjType, true);
                    }
                    else {
                        this.createLine(objValue, dialogObjType, false);
                    }
                }
            });
        }
    }
    createLine(msgObj, objType, showAvatar) {
        const factory = this.componentFactoryResolver.resolveComponentFactory(ChatDialogLineComponent);
        const ref = this.chatLineComp.createComponent(factory);
        ref.instance.setDialogObject(msgObj);
        ref.instance.setDialogObjType(objType);
        ref.instance.setShowAvatarFlag(showAvatar);
        ref.changeDetectorRef.detectChanges();
        return ref.instance;
    }
};
tslib_1.__decorate([
    ViewChild('chatLineComp', { read: ViewContainerRef, static: true })
], ChatBodyComponent.prototype, "chatLineComp", void 0);
ChatBodyComponent = tslib_1.__decorate([
    Component({
        selector: 'dc-chat-body',
        templateUrl: './chat-body.component.html',
        styleUrls: ['./chat-body.component.css']
    })
], ChatBodyComponent);
export { ChatBodyComponent };
//# sourceMappingURL=chat-body.component.js.map