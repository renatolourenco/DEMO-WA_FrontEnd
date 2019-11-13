import * as tslib_1 from "tslib";
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ChatAvatarComponent } from './chat-avatar/chat-avatar.component';
import { TextBalloonComponent } from './text-balloon/text-balloon.component';
let ChatDialogLineComponent = class ChatDialogLineComponent {
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        if (this.dialogObjType === 'user') {
            this.createAvatar(this.dialogObjType, this.showAvatar);
            this.createTextBalloon(this.dialogObjType, this.dialogObj[`${this.dialogObjType}`]);
        }
        else {
            this.createAvatar(this.dialogObjType, this.showAvatar);
            if (this.dialogObj['response_type'] === 'text') {
                this.createTextBalloon(this.dialogObjType, this.dialogObj['text']);
            }
        }
    }
    createAvatar(avatarType, showAvatar) {
        const factory = this.componentFactoryResolver.resolveComponentFactory(ChatAvatarComponent);
        const ref = this.avatarComp.createComponent(factory);
        ref.instance.setAvatarType(avatarType);
        ref.instance.setShowAvatar(showAvatar);
        ref.changeDetectorRef.detectChanges();
        return ref.instance;
    }
    createTextBalloon(ballonType, txtMsg) {
        const factory = this.componentFactoryResolver.resolveComponentFactory(TextBalloonComponent);
        const ref = this.textBalloonComp.createComponent(factory);
        ref.instance.setBalloonType(ballonType);
        ref.instance.setTxtMessage(txtMsg);
        ref.changeDetectorRef.detectChanges();
        return ref.instance;
    }
    setDialogObject(dialog) {
        this.dialogObj = dialog;
    }
    setDialogObjType(type) {
        this.dialogObjType = type;
    }
    setShowAvatarFlag(show) {
        this.showAvatar = show;
    }
};
tslib_1.__decorate([
    ViewChild('avatarComp', { read: ViewContainerRef, static: true })
], ChatDialogLineComponent.prototype, "avatarComp", void 0);
tslib_1.__decorate([
    ViewChild('textBalloonComp', { read: ViewContainerRef, static: true })
], ChatDialogLineComponent.prototype, "textBalloonComp", void 0);
ChatDialogLineComponent = tslib_1.__decorate([
    Component({
        selector: 'dc-chat-dialog-line',
        templateUrl: './chat-dialog-line.component.html',
        styleUrls: ['./chat-dialog-line.component.css']
    })
], ChatDialogLineComponent);
export { ChatDialogLineComponent };
//# sourceMappingURL=chat-dialog-line.component.js.map