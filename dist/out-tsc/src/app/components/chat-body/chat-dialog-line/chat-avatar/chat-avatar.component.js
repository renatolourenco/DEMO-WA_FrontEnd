import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ChatAvatarComponent = class ChatAvatarComponent {
    constructor() { }
    ngOnInit() { }
    setAvatarType(typeAvatar) {
        this.type = `dc_chat_dialog_avatar-avatar_${typeAvatar}`;
        this.avatarPath = `../../../../../assets/img/${typeAvatar}_avatar.png`;
    }
    setShowAvatar(show) {
        this.show = show;
    }
};
ChatAvatarComponent = tslib_1.__decorate([
    Component({
        selector: 'dc-chat-avatar',
        templateUrl: './chat-avatar.component.html',
        styleUrls: ['./chat-avatar.component.css']
    })
], ChatAvatarComponent);
export { ChatAvatarComponent };
//# sourceMappingURL=chat-avatar.component.js.map